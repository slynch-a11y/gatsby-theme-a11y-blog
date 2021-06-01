import React, {useContext} from 'react';
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Themed} from 'theme-ui';
import {Link} from 'gatsby';
import {GlobalStateContext} from '../context/GlobalContextProvider';

export default (SearchResults) => {
  const state = useContext(GlobalStateContext);

  return (
    <>
      {state.searchResults.length ? (
        <div id="search" sx={{marginTop: '20px'}}>
          <ul sx={{listStyleType: 'none'}}>
            {state.searchResults.map((page) => (
              <li key={page.id} sx={{marginLeft: '-28px', marginTop: '2rem'}}>
                {page.slug === '/home/' ? (
                  <Themed.a as={Link} to="/">
                    {page.title}
                  </Themed.a>
                ) : (
                  <Themed.a as={Link} to={page.slug}>
                    {page.title}
                  </Themed.a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
