module.exports = {
    plugins: [
      `gatsby-plugin-theme-ui`,
        {
            resolve: "@slynch-a11y/gatsby-theme-a11y-blog",
            options: {
                markdownPath: "src/markdown"
                
            }
        }
    ]
  }
  