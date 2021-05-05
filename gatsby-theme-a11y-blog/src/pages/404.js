import React from 'react';
import {graphql, Link} from 'gatsby';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Themed} from 'theme-ui';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function PageNotFound(props) {
  const {text} = props.data.allMdx.nodes[0].frontmatter;
  const image = getImage(props.data.allMdx.nodes[0].frontmatter.featuredImage);
  const imageAlt = props.data.allMdx.nodes[0].frontmatter.featuredImageAlt;

  return (
    <Layout>
      <SEO title="Page Not Found" />
      <Themed.h1>Page Not Found</Themed.h1>
      <p>{text}</p>
      <p>
        <Themed.a as={Link} to="/">
          Go Back Home
        </Themed.a>
      </p>
      {image ? <GatsbyImage image={image} alt={imageAlt} /> : null}
    </Layout>
  );
}

export const pageNotFoundQuery = graphql`
  query pageNotFoundQuery {
    allMdx(
      filter: {
        fileAbsolutePath: {regex: "/src/markdown/"}
        frontmatter: {title: {eq: "Page Not Found"}}
      }
    ) {
      nodes {
        frontmatter {
          title
          text
          featuredImageAlt
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`;

PageNotFound.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.isRequired,
  }).isRequired,
};
