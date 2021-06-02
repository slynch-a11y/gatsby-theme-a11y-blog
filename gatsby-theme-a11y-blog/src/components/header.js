import React from 'react';
import Search from './search';
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Themed} from 'theme-ui';
import Menu from './menu';
import Logo from './logo';

export default (Header) => {
  return (
    <header>
      <div sx={{margin: 'auto', width: '18rem'}}>
        <Themed.a
          sx={{
            top: 'auto',
            clip: 'rect(0, 0, 0, 0)',
            overflow: 'hidden',
            position: 'absolute',
            ':focus': {
              clip: 'auto',
              position: 'relative',
              height: 'auto',
              overflow: 'visible',
              padding: '10px',
              margin: '10px',
              display: 'block',
              textDecoration: 'none',
              textAlign: 'center',
            },
          }}
          href="#main"
        >
          Skip to Main Content
        </Themed.a>
      </div>
      <div>
        <div>
          <div
            sx={{
              p: 3,

              display: 'flex',
              justifyContent: 'space-between',

              '@media screen and (max-width: 60rem)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
            }}
          >
            <Logo />
            <Menu />

            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};
