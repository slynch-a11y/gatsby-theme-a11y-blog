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
    <div sx={{}}>
     
      <NavLink as={Link} variant="socialNav" to="/">
        <span
          sx={{
            fontFamily: "Sacramento",
            fontSize: 6,
            fontWeight: "200",
            whiteSpace: "nowrap",
          }}
        >{author}</span>
        <br />
        <div sx={{ display: "flex", justifyContent: "center" }}>
      <span sx={{ fontWeight: "200", fontSize: 3, whiteSpace: "nowrap" }}>{tagline}</span>
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
