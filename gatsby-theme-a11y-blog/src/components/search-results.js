import React, { useContext } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { Link } from "gatsby";
import { GlobalStateContext } from "../context/GlobalContextProvider";

export default (SearchResults) => {
  const state = useContext(GlobalStateContext);

  return (
    <>
    

      {state.searchResults.length ? (
        <div sx={{ marginTop: "20px" }}>
          <ul sx={{ listStyleType: "none" }}>
            {state.searchResults.map((page) => (
              <li key={page.id} sx={{ marginLeft: "-28px" }}>
                <Styled.a as={Link} to={page.slug}>
                  {page.title}
                </Styled.a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
</>
  );
};