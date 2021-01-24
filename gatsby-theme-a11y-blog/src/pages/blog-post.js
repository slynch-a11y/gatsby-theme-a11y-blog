import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function BlogPost(props) {
  const {
    title,
    html,
    date,
    previous,
    next,
    featuredImage,
    featuredImageAlt,
  } = props.pageContext;

  return (
    <Layout>
      <SEO title={title} />
      <Styled.h1>{title}</Styled.h1>
      <p>{date}</p>
      { featuredImage ? 
      <Img fluid={featuredImage.childImageSharp.fluid} alt={featuredImageAlt} />
      : null }
        <MDXRenderer>{html}</MDXRenderer>
     
      <hr />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={"/"+previous.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={"/"+next.slug} rel="next">
              {next.frontmatter.title} →
            </Styled.a>
          )}
        </li>
      </ul>
    </Layout>
  );
}
