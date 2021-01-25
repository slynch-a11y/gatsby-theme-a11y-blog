import React from 'react';

import { graphql, Link } from 'gatsby';


import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Styled } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function BlogPost({ data: {mdx} }) {
	return (
		<Layout>
		
			<SEO title={mdx.frontmatter.title} />
			<Styled.h1>{mdx.frontmatter.title}</Styled.h1>
			<p>{mdx.frontmatter.date}</p>
			{mdx.frontmatter.featuredImage ? <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} alt={mdx.frontmatter.featuredImageAlt} /> : null}
			<MDXRenderer>{mdx.body}</MDXRenderer>

			<hr />
		
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
    
		mdx(id: { eq: $id }) {
			id
      body
      slug
      
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
`;
