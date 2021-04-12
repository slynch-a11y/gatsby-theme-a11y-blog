module.exports = {
  siteMetadata: {
    title: 'Gatsby A11y-Ready Theme',
    author: 'Sarah E. Lynch',
    tagline: 'accessibility engineer',
    url: '',
    description: 'An accessibility-ready Gatsby theme.',
    image: '',
    social: {
      twitter: '',
      linkedIn: '',
      email: '',
      github: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/markdown',
        name: 'markdown',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`, `html`],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            tags: (node) => node.frontmatter.tags,
            html: (node) => node.internal.content,
            slug: (node) => node.fields.slug,
          },
        },
      },
    },
  ],
};
