module.exports = {
  siteMetadata: {
    title: "Gatsby A11y-Ready Theme",
    author: "Your Name",
    tagline: "add a tagline",
    url: "",
    description: "An accessibility-ready Gatsby theme.",
    image: "",
    social: {
      twitter: "twitter_handle",
      linkedIn: "your_profile_here",
      email: "sample@mail.com",
      github: "your_profile_here",
    },
  },
  plugins: [
    {
      resolve: "@slynch-a11y/gatsby-theme-a11y-blog",
      options: {
        markdownPath: "src/markdown",
      },
    },
  ],
};
