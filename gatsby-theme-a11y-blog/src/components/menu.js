import { Link } from "gatsby";
import { NavLink, Flex } from "theme-ui";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { css } from "@emotion/core";
import Toggle from "./toggle";

export default (Menu) => {
  
  return (
    <div
      css={css`
        margin-bottom: -25px;
        margin-left: -30px;
        margin-top: 5px;
        white-space: nowrap;
      `}
    >
      <Flex>
        <nav aria-label="primary">
          <ul sx={{ listStyleType: "none" }}>
            <li sx={{ display: "inline-block" }}>
              <NavLink as={Link} to="/" px={3}>
                Home
              </NavLink>
            </li>
            <li sx={{ display: "inline-block" }}>
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
