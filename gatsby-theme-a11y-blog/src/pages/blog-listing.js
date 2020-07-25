import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Styled } from "theme-ui";

export default function BlogListing(props) {
  const blogListings
  if (props.pageContext.blogs) {
    blogListings = props.pageContext.blogs;
  } else {
    blogListings = null;
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Styled.h1>Blog</Styled.h1>
      {blogListings.map((blog, index) => {
        return (
          <div key={index}>
            <Styled.h2>
              <Styled.a as={Link} to={blog.node.fields.slug}>
                {blog.node.frontmatter.title}
              </Styled.a>
            </Styled.h2>
            <p>{blog.node.excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
}
