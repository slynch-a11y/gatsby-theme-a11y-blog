const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require("fs");

//make sure the src directory exists
//if the src/markdown directory does not exist, it will create it
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = "src/markdown";
  const srcFolder = "src";
  if (!fs.existsSync(srcFolder)) {
    reporter.info(`creating the ${srcFolder} directory`);
    fs.mkdirSync(srcFolder);
  }
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};



//create a slug field
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions;

  const basePath = "/";

  //query for blogs
  const blogResult = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: {
            parent: {}
            fileAbsolutePath: { regex: "/src/markdown/blog/" }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                title
                tags
                date(formatString: "MMMM DD, YYYY")
                description
                featuredImage {
                  childImageSharp {
                    fixed(height: 150, width: 200, cropFocus: CENTER) {
                      base64
                      aspectRatio
                      srcWebp
                      srcSetWebp
                      src
                      srcSet
                      width
                      height
                    }
                    fluid(maxWidth: 800) {
                      src
                      srcSet
                      srcSetWebp
                      base64
                      aspectRatio
                    }
                  }
                }
                featuredImageAlt
              }
              excerpt(pruneLength: 150)
            }
          }
        }
      }
    `
  );

  if (blogResult.errors) {
    throw blogResult.errors;
  }

  const blogPath = "blog";
  const blogPost = require.resolve(`./src/pages/blog-post.js`);
  const blogPosts = blogResult.data.allMarkdownRemark.edges;

  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;

    //create blog pages
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        title: post.node.frontmatter.title,
        date: post.node.frontmatter.date,
        tags: post.node.frontmatter.tags,
        description: post.node.frontmatter.description,
        html: post.node.html,
        blogPath,
        previous,
        next,
        excerpt: post.node.excerpt,
        featuredImage: post.node.frontmatter.featuredImage,
        featuredImageAlt: post.node.frontmatter.featuredImageAlt,
      },
    });
  });

  //create blog listing page
  createPage({
    path: blogPath,
    component: require.resolve(`./src/pages/blog-listing.js`),
    context: {
      blogs: blogPosts,
    },
  });

  //create home page
  createPage({
    path: basePath,
    component: require.resolve(`./src/pages/home-page.js`),
    context: {
      blogs: blogPosts,
    },
  });

  //create search page
  createPage({
    path: "search",
    component: require.resolve(`./src/pages/search-page.js`),
  });

  //query for portfolio results
  const result = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: {
            parent: {}
            fileAbsolutePath: { regex: "/src/markdown/portfolio/" }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                title
                tags
                date(formatString: "MMMM DD, YYYY")
                description
                image {
                  childImageSharp {
                    fixed(height: 150, width: 200, cropFocus: CENTER) {
                      base64
                      aspectRatio
                      srcWebp
                      srcSetWebp
                      src
                      srcSet
                      width
                      height
                    }
                    fluid(maxWidth: 300) {
                      src
                      srcSet
                      srcSetWebp
                      base64
                      aspectRatio
                    }
                  }
                }
              }
              excerpt(pruneLength: 150)
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const portfolioPosts = result.data.allMarkdownRemark.edges;
  const portfolioPath = "portfolio";

  //create portfolio listing page
  createPage({
    path: portfolioPath,
    component: require.resolve(`./src/pages/portfolio-listing.js`),
    context: {
      portfolio: portfolioPosts,
    },
  });
};
