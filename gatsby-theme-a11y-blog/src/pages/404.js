import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import image404 from "../images/404.jpeg";
import { Styled } from "theme-ui";

export default function PageNotFound(props) {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <Styled.h1>Page Not Found!</Styled.h1>
     <img src={image404} alt="" />
    </Layout>
  );
}