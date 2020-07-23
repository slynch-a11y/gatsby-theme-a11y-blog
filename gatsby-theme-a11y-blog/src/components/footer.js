import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled, NavLink, Flex } from "theme-ui";

export function Footer(props) {
  const { email, twitter, linkedIn } = props.data.site.siteMetadata.social;

  return (
<footer sx={{ marginTop: "200px" }}>
      <div
        sx={{
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Styled.h2 sx={{ marginBottom: "2px" }}>Connect with me!</Styled.h2>

        <Flex
          as="nav"
          aria-label="social"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "-40px",
          }}
        >
          <ul sx={{ listStyleType: "none" }}>
            <li sx={{ display: "inline-block" }}>
              <NavLink
                variant="socialNav"
                href={"mailto:" + email}
                aria-label="Email"
                title="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </NavLink>
            </li>
            <li sx={{ display: "inline-block" }}>
              <NavLink
                variant="socialNav"
                href={"https://twitter.com/" + twitter}
                aria-label="Twitter"
                title="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
              </NavLink>
            </li>
            <li sx={{ display: "inline-block" }}>
              <NavLink
                variant="socialNav"
                href={"https://www.linkedin.com/in/" + linkedIn}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
              </NavLink>
            </li>
          </ul>
        </Flex>

        <div sx={{ marginBottom: "30px" }}>
          © {new Date().getFullYear()} Built with
          {` `}
          <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
        </div>
      </div>
    </footer>
  );
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
              linkedIn
              email
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} {...props} />}
  />
);
Footer.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
