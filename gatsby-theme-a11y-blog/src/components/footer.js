import {StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Styled, NavLink, Flex} from 'theme-ui';

export function Footer(props) {
  const {
    email,
    twitter,
    linkedIn,
    github,
  } = props.data.site.siteMetadata.social;

  return (
    <footer sx={{marginTop: '200px'}}>
      <div
        sx={{
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Styled.h2 sx={{marginBottom: '2px'}}>Connect with me!</Styled.h2>

        <Flex
          as="nav"
          aria-label="social"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '-40px',
          }}
        >
          <ul sx={{listStyleType: 'none'}}>
            {twitter.length ? (
              <li sx={{display: 'inline-block'}}>
                <NavLink
                  variant="socialNav"
                  href={'https://twitter.com/' + twitter}
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                </NavLink>
              </li>
            ) : null}
            {linkedIn.length ? (
              <li sx={{display: 'inline-block'}}>
                <NavLink
                  variant="socialNav"
                  href={'https://www.linkedin.com/in/' + linkedIn}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                </NavLink>
              </li>
            ) : null}
            {github.length ? (
              <li sx={{display: 'inline-block'}}>
                <NavLink
                  variant="socialNav"
                  href={'https://www.github.com/' + github}
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                </NavLink>
              </li>
            ) : null}
            {email.length ? (
              <li sx={{display: 'inline-block'}}>
                <NavLink
                  variant="socialNav"
                  href={'mailto:' + email}
                  aria-label="Email"
                  title="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                </NavLink>
              </li>
            ) : null}
          </ul>
        </Flex>

        <div sx={{marginBottom: '30px'}}>
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
              github
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
