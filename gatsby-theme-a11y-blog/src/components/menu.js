import {Link} from 'gatsby';
import {NavLink, Flex} from 'theme-ui';
/** @jsx jsx */
import {jsx} from 'theme-ui';
import Toggle from './toggle';

export default (Menu) => {
  return (
    <div
      sx={{
        marginBottom: '-20px',
        marginLeft: '-30px',
        whiteSpace: 'nowrap',
      }}
    >
      <Flex>
        <nav aria-label="primary">
          <ul sx={{listStyleType: 'none'}}>
            <li sx={{display: 'inline-block'}}>
              <NavLink as={Link} to="/" px={3}>
                Home
              </NavLink>
            </li>
            <li sx={{display: 'inline-block'}}>
              <NavLink as={Link} to="/blog" px={3}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <Toggle />
      </Flex>
    </div>
  );
};
