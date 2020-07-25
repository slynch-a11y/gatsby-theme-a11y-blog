import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Styled } from "theme-ui";

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
      <Img fluid={featuredImage.childImageSharp.fluid} alt={featuredImageAlt} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
            <Styled.a as={Link} to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Styled.a>
          )}
        </li>
      </ul>
    </Layout>
  );
}
