import React from 'react';
import {graphql, Link} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import {Themed, Grid, jsx, Card} from 'theme-ui';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';
/** @jsx jsx */

export default function HomePage(props) {
  const blogListings = props.pageContext.blogs;
  const featuredImage = getImage(
    props.data.allMdx.nodes[0].frontmatter.featuredImage
  );
  const {featuredImageAlt} = props.data.allMdx.nodes[0].frontmatter;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={5} width={[320]}>
        <div>
          <Themed.h1>Welcome</Themed.h1> <Themed.h2>About Me</Themed.h2>
          <MDXRenderer>{props.data.allMdx.nodes[0].body}</MDXRenderer>
        </div>
        <div>
          <Card sx={{marginTop: ['10px', '100px', '10px', '100px']}}>
            {featuredImage ? (
              <GatsbyImage image={featuredImage} alt={featuredImageAlt} />
            ) : null}
          </Card>
        </div>
      </Grid>
      <div>
        <Themed.h2 sx={{marginTop: '50px'}}>Most Recent Blog Posts</Themed.h2>

        {blogListings
          ? blogListings.map((blog, index) => {
              if (index <= 1) {
                return (
                  <div key={index}>
                    <Themed.h3 sx={{marginBottom: '0.5rem'}}>
                      <Themed.a as={Link} to={blog.node.slug}>
                        {blog.node.frontmatter.title}
                      </Themed.a>
                    </Themed.h3>
                    <p class="date">{blog.node.frontmatter.date}</p>
                    <p sx={{marginBottom: '2rem'}}>{blog.node.excerpt}</p>
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

export const homePageQuery = graphql`
  query homePageQuery {
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
          date
          featuredImageAlt
          featuredImageCaption
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 450)
            }
          }
        }
      }
    }
  }
`;
HomePage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.isRequired,
  }).isRequired,
};
