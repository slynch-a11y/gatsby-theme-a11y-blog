import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {Themed, jsx} from 'theme-ui';
/** @jsx jsx */

export default function BlogListing(props) {
  const blogListings = props.pageContext.blogs;

  return (
    <Layout>
      <SEO title="Blog" />
      <Themed.h1>Blog</Themed.h1>
      {blogListings
        ? blogListings.map((blog, index) => {
            return (
              <div key={index}>
                <Themed.h2>
                  <Themed.a as={Link} to={'/' + blog.node.slug}>
                    {blog.node.frontmatter.title}
                  </Themed.a>
                </Themed.h2>
                <div className="date">{blog.node.frontmatter.date}</div>
                <p sx={{marginBottom: '2rem'}}>{blog.node.excerpt}</p>
              </div>
            );
          })
        : null}
    </Layout>
  );
}
