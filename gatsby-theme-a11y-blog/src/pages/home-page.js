import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
/** @jsx jsx */
import { Styled, Grid, jsx, Card } from "theme-ui";
import twoCats from "../images/two_cats.jpg";

export default function HomePage(props) {
  const blogListings = props.pageContext.blogs;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={5} width={[240]}>
        <div>
          <Styled.h1>Welcome</Styled.h1>{" "}
          <Card variant="secondary">
            <figure><img src={twoCats} alt="" />
            
            <figcaption>Two cats sitting next to each other.  One is wearing a bowtie and the other is wearing a tie.</figcaption></figure>
          </Card>
        </div>
        <div>
          <Styled.h2>About Me</Styled.h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
            condimentum mattis pellentesque id nibh tortor id aliquet. Quis
            hendrerit dolor magna eget est lorem ipsum dolor sit. Sed tempus
            urna et pharetra pharetra massa massa. Vitae et leo duis ut diam
            quam nulla porttitor massa. Pellentesque habitant morbi tristique
            senectus et netus et malesuada. Eleifend mi in nulla posuere
            sollicitudin. Turpis egestas maecenas pharetra convallis posuere
            morbi leo urna. Tempor nec feugiat nisl pretium fusce id velit.
          </p>
        </div>
      </Grid>
      <div>
        <Styled.h2 sx={{ marginTop: "50px" }}>Most Recent Blog Posts</Styled.h2>

        { blogListings ? blogListings.map((blog, index) => {
          if (index <= 1) {
            return (
              <div key={index}>
                <Styled.h3 sx={{ marginBottom: "0.5rem" }}>
                  <Styled.a as={Link} to={blog.node.fields.slug}>
                    {blog.node.frontmatter.title}
                  </Styled.a>
                </Styled.h3>
                <p>{blog.node.excerpt}</p>
              </div>
            );
          } else {
            return null;
          }
        }) : null}
      </div>
    </Layout>
  );
}
