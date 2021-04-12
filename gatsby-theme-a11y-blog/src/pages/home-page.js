import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import {Styled, Grid, jsx, Card} from 'theme-ui';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';
/** @jsx jsx */

export function HomePage(props) {
  const blogListings = props.pageContext.blogs;

  const {featuredImage} = props.data.allMdx.nodes[0].frontmatter;
  const {featuredImageAlt} = props.data.allMdx.nodes[0].frontmatter;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={5} width={[340]}>
        <div>
          <Styled.h1>Welcome</Styled.h1>{' '}
          <Card sx={{marginTop: '30px'}}>
            {featuredImage ? (
              <Img
                fluid={featuredImage.childImageSharp.fluid}
                alt={featuredImageAlt}
              />
            ) : null}
          </Card>
        </div>
        <div>
          <Styled.h2>About Me</Styled.h2>
          <MDXRenderer>{props.data.allMdx.nodes[0].body}</MDXRenderer>
        </div>
      </Grid>
      <div>
        <Styled.h2 sx={{marginTop: '50px'}}>Most Recent Blog Posts</Styled.h2>

        {blogListings
          ? blogListings.map((blog, index) => {
              if (index <= 1) {
                return (
                  <div key={index}>
                    <Styled.h3 sx={{marginBottom: '0.5rem'}}>
                      <Styled.a as={Link} to={blog.node.slug}>
                        {blog.node.frontmatter.title}
                      </Styled.a>
                    </Styled.h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                );
              }
              return null;
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
        allMdx(
          filter: {
            fileAbsolutePath: {regex: "/src/markdown/"}
            frontmatter: {title: {eq: "Home"}}
          }
        ) {
          nodes {
            body
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
    allMdx: PropTypes.isRequired,
  }).isRequired,
};
