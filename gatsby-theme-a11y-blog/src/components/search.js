import React, { useEffect, useContext } from "react";
import { graphql, StaticQuery, navigate } from "gatsby";
import { Index } from "elasticlunr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, Button, Box } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";

export function Search(props) {
  const dispatch = useContext(GlobalDispatchContext);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getOrCreateIndex = () => {
      return props.index ? props.index : Index.load(props.searchIndex);
    };
    const searchrs = getOrCreateIndex();

    const results = searchrs
      .search(searchTerm, { expand: true })
      .map(({ ref }) => {
        return searchrs.documentStore.getDoc(ref);
      });

    setSearchResults(results);
  }, [searchTerm, props]);

  return (
    <Box as="form" class="search" id="js-search" role="search">
      <div sx={{ whiteSpace: "nowrap" }}>
        <Input
          sx={{
            color: "accent",
            display: "inline",
            width: "150px",
            marginRight: "5px",
          }}
          type="text"
          id="search"
          aria-label="search"
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
         <Button
          variant="search"
          type="submit"
          class="search-button"
          aria-label="submit"
          onClick={(event) => {
            event.preventDefault();
            dispatch({ type: "SHOW_SEARCH_RESULTS", payload: searchResults });
            dispatch({ type: "SHOW_SEARCH_TERM", payload: searchTerm });
            navigate("/search");
          }}
        >
          <FontAwesomeIcon icon={faSearch} aria-hidden="true" /> Search
        </Button> 
      </div>
    </Box>
  );
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <Search searchIndex={data.siteSearchIndex.index} {...props} />
    )}
  />
);
