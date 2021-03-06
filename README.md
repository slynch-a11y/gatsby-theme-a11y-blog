# Accessible Gatsby Theme for Blogging
This theme was created with accessibility in mind. 

## Preview
[View a live preview (my own blog)](https://www.sarahelynch.com/).

## Features
* Accessible
* Site Search
* Theme UI (utilizing light and dark modes)
* MDX for using JSX in blog posts

## Gatsby Plugins Used
* gatsby-source-filesystem
* gatsby-plugin-mdx
* gatsby-transformer-remark
* gatsby-plugin-sharp
* gatsby-remark-images
* gatsby-transformer-sharp
* gatsby-plugin-webfonts
* gatsby-plugin-theme-ui
* gatsby-plugin-typography
* gatsby-plugin-react-helmet

## How to Install
Starting with a current Gatsby site, install the theme via npm:

```npm install @slynch-a11y/gatsby-theme-a11y-blog```

## Customize your Site
In your gatsby-config.js file, add the theme and appropriate metadata. For example:

```
module.exports = {
    siteMetadata: {
      title: "Sarah E. Lynch",
      author: "Sarah E. Lynch",
      tagline: "accessibility engineer",
      url: "https://www.sarahelynch.com/",
      description: "A blog about digital accessibility.",
      image: "images/cats.png",
      social: {
        twitter: "sarah_e_lynch",
        linkedIn: "sarah-lynch-7257028",
        email: "sarah@alum.rpi.edu",
        github: "slynch-a11y",
      },
    },
    plugins: [
      {
        resolve: "@slynch-a11y/gatsby-theme-a11y-blog",
        options: {
          markdownPath: "src/markdown",
        },
      },
    ]
}
```
## Start Developing
```
gatsby develop
```

## Add Blog Content
Add blog posts as markdown files in src/markdown/blog with the appropriate front matter. For example:
```
---
title: Third Blog Post
date: '2020-05-05'
description: 'this is my third blog post'
tags: blog, third
featuredImage: "./images/leo.jpg"
featuredImageAlt: "featured-image-alt-text"
---
```
## Add Home Page "About Me" Content
Include a home.md file in src/markdown with the appropriate front matter.  For example:
```
---
title: Home
featuredImage: "./images/home.jpg"
featuredImageAlt: "Two fancy cats. One is wearing a bowtie and the other is wearing a tie."
featuredImageCaption: ""
---
```
## Optional
### Modify the 404 Page
Include a 404.md file in src/markdown with the appropriate front matter.  For example:
```
---
title: Page Not Found
featuredImage: "./images/404.jpg"
featuredImageAlt: "page not found"
text: "Oops! Looks like the page you are looking for does not exist."
---
```
