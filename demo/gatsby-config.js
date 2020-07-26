module.exports = {
  siteMetadata: {
    title: "Gatsby A11y-Ready Theme",
    author: "Your Name",
    tagline: "a tagline here",
    url: "",
    description: "An accessibility-ready Gatsby theme.",
    image: "",
    social: {
      twitter: "twitter_handle",
      linkedIn: "linkedin",
      email: "sample@mail.com",
      github: "github",
    },
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: "@slynch-a11y/gatsby-theme-a11y-blog",
      options: {
        markdownPath: "src/markdown",
      },
    },
  ],
};
