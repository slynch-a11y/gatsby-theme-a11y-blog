module.exports = {
  siteMetadata: {
    title: "Gatsby A11y-Ready Theme",
    author: "Sarah E. Lynch",
    tagline: "accessibility engineer",
    url: "",
    description: "An accessibility-ready Gatsby theme.",
    image: "",
    social: {
      twitter: "",
      linkedIn: "",
      email: "",
      github: "",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "src/markdown",
        name: "markdown",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
            {
              family: `Poppins`,
            },
            {
              family: `Sacramento`,
            },
          ],
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
