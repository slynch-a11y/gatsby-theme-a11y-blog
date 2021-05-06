import React from 'react';
import Header from './header';
import Footer from './footer';
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container} from 'theme-ui';

export default function Layout({children}) {
  return (
    <>
      <Container sx={{margin: 'auto', width: ['90%', '90%', '80%', '60%']}}>
        <Header />
        <main id="main" tabIndex="-1" sx={{marginBottom: '50px'}}>
          <div sx={{marginTop: '50px'}}>
            <div sx={{marginBottom: '30px'}}></div>

            {children}
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
}
