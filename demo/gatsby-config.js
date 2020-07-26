module.exports = {
  siteMetadata: {
    title: "Gatsby A11y-Ready Theme",
    author: "Sarah E. Lynch",
    tagline: "accessibility engineer",
    url: "",
    description: "An accessibility-ready Gatsby theme.",
    image: "",
    social: {
      twitter: "sarah_e_lynch",
      linkedIn: "sarah-lynch-7257028",
      email: "sarah@alum.rpi.edu",
      github: "slynch-a11y",
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
