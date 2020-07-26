import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled, NavLink } from "theme-ui";
import { Link } from "gatsby";

export function Logo(props) {
  const author = props.data.site.siteMetadata.author;
  const tagline = props.data.site.siteMetadata.tagline;
  return (
    <div sx={{ marginRight: "20px", marginBottom: "10px" }}>
      <NavLink as={Link} variant="logo" to="/">
        <span
          sx={{
            fontFamily: "Sacramento",
            fontSize: 6,
            fontWeight: "200",
            whiteSpace: "nowrap",
          }}
        >
          {author}
        </span>
        <br />
        <div sx={{ mx: "auto", maxWidth: "container" }}>
          <span sx={{ marginLeft: "20px", fontWeight: "200" }}>{tagline}</span>
        </div>
      </NavLink>
    </div>
  );
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            tagline
          }
        }
      }
    `}
    render={(data) => <Logo data={data} {...props} />}
  />
);
Logo.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
