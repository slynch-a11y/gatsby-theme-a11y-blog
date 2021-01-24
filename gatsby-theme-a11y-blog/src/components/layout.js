import React from "react";
import Header from "./header";
import Footer from "./footer";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link, jsx, Styled }

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <main id="main" tabIndex="-1" sx={{ marginBottom: "50px" }}>
          <div sx={{ marginTop: "50px" }}>
            <div sx={{ marginBottom: "30px" }} />

           {children}
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
}
