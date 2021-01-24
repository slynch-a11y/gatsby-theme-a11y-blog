import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import { Styled } from "theme-ui";

export function PageNotFound(props) {
  const text = props.data.allMdx.nodes[0].frontmatter.text;
  const featuredImage =
    props.data.allMdx.nodes[0].frontmatter.featuredImage;
  const featuredImageAlt =
    props.data.allMdx.nodes[0].frontmatter.featuredImageAlt;

  return (
    <Layout>
      <SEO title="Page Not Found" />
      <Styled.h1>Page Not Found</Styled.h1>
      <p>{text}</p>
      <p>
        <Styled.a as={Link} to="/">
          Go Back Home
        </Styled.a>
      </p>
      {featuredImage ? (
        <Img
          fluid={featuredImage.childImageSharp.fluid}
          alt={featuredImageAlt}
        />
      ) : null}
    </Layout>
  );
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/src/markdown/" }
            frontmatter: { title: { eq: "Page Not Found" } }
          }
        ) {
          nodes {
            frontmatter {
              title
              text
              featuredImageAlt
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                    srcSet
                    srcSetWebp
                    base64
                    aspectRatio
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <PageNotFound data={data} {...props} />}
  />
);
PageNotFound.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.isRequired,
  }).isRequired,
};
