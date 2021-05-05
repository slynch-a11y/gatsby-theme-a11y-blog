import React, {useContext} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SearchResults from '../components/search-results';
import {GlobalStateContext} from '../context/GlobalContextProvider';
import {Themed} from 'theme-ui';

export default function SearchPage() {
  const state = useContext(GlobalStateContext);
  const term = state.searchTerm.length
    ? 'Search Results for "' + state.searchTerm + '"'
    : 'Enter a term you wish to search for';

  return (
    <Layout>
      <SEO title={term} />
      <Themed.h1>{term}</Themed.h1>
      <SearchResults />
    </Layout>
  );
}
