import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
/** @jsx jsx */
import { Styled, Grid, jsx, Card } from "theme-ui";

export function HomePage(props) {
  const blogListings = props.pageContext.blogs;

  const featuredImage =
    props.data.allMarkdownRemark.nodes[0].frontmatter.featuredImage;
  const featuredImageAlt =
    props.data.allMarkdownRemark.nodes[0].frontmatter.featuredImageAlt;
  const featuredImageCaption =
    props.data.allMarkdownRemark.nodes[0].frontmatter.featuredImageCaption;
  const html = props.data.allMarkdownRemark.nodes[0].html;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={5} width={[240]}>
        <div>
          <Styled.h1>Welcome</Styled.h1>{" "}
          <Card variant="secondary">
            <figure>
              {featuredImage ? (
                <Img
                  fluid={featuredImage.childImageSharp.fluid}
                  alt={featuredImageAlt}
                />
              ) : null}

              <figcaption>{featuredImageCaption}</figcaption>
            </figure>
          </Card>
        </div>
        <div>
          <Styled.h2>About Me</Styled.h2>

          <p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </p>
        </div>
      </Grid>
      <div>
        <Styled.h2 sx={{ marginTop: "50px" }}>Most Recent Blog Posts</Styled.h2>

        {blogListings
          ? blogListings.map((blog, index) => {
              if (index <= 1) {
                return (
                  <div key={index}>
                    <Styled.h3 sx={{ marginBottom: "0.5rem" }}>
                      <Styled.a as={Link} to={blog.node.fields.slug}>
                        {blog.node.frontmatter.title}
                      </Styled.a>
                    </Styled.h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
    </Layout>
  );
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/src/markdown/" }
            frontmatter: { title: { eq: "Home" } }
          }
        ) {
          nodes {
            html
            frontmatter {
              title
              featuredImageAlt
              featuredImageCaption
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
    render={(data) => <HomePage data={data} {...props} />}
  />
);
HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.isRequired,
  }).isRequired,
};
