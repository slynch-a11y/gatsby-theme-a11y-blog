import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {Themed} from 'theme-ui';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';
import formatDate from '../date-formatter';

export default function BlogPost({data: {mdx}}) {
  const featuredImage = getImage(mdx.frontmatter.featuredImage);

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Themed.h1>{mdx.frontmatter.title}</Themed.h1>
      {mdx.frontmatter.date ? (
        <p className="date">{formatDate(mdx.frontmatter.date)}</p>
      ) : null}
      {featuredImage ? (
        <GatsbyImage
          image={featuredImage}
          alt={mdx.frontmatter.featuredImageAlt}
        />
      ) : null}
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      slug

      frontmatter {
        title
        date
        featuredImageAlt
        featuredImageCaption
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
