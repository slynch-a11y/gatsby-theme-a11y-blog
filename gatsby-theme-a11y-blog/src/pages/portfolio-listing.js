import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled, Card, Text } from "theme-ui";

export default function PortfolioListing(props) {
  const portfolioListings = props.pageContext.portfolio;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Styled.h1>Portfolio</Styled.h1>
      <p>What I create when I'm not sleeping.</p>
      <div sx={{ mx: "auto", maxWidth: "container" }}>
        <ul
          sx={{
            listStyle: "none",
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
            m: 0,
            py: 4,
          }}
        >
          { portfolioListings ? portfolioListings.map((portfolio, index) => {
            return (
              <li key={index}>
                <Card
                  sx={{
                    maxWidth: 260,
                
                  }}
                >
                  <Img sx={{
                    
                    minHeight: 250
                  }}
                    fluid={
                      portfolio.node.frontmatter.image.childImageSharp.fluid
                    }
                    alt=""
                  />
                  <Styled.h2 sx={{ color: "black" }}>
                    {portfolio.node.frontmatter.title}
                  </Styled.h2>
                  <Text sx={{ color: "black" }}>Source | Demo</Text>
                </Card>
              </li>
            );
          }) : null}
        </ul>
      </div>
    </Layout>
  );
}
