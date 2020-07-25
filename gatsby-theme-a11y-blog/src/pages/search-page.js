import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import SearchResults from "../components/search-results";
// import { GlobalStateContext } from "../context/GlobalContextProvider";

export default (SearchPage) => {
  // const state = useContext(GlobalStateContext);
  // const term = state.searchTerm.length
  //   ? 'Search Results for "' + state.searchTerm + '"'
  //   : "Enter a term you wish to search for";
const term = "hello"
  return (
    <Layout>
      <SEO title={term} />
      hello
      {/* <h1>{term}</h1>
      <SearchResults /> */}
    </Layout>
  );
};
