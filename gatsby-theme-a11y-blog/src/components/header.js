import React from "react";
import Search from "./search";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { css } from "@emotion/core";
import Menu from "./menu";
import Logo from "./logo";

export default (Header) => {
  return (
    <header>
      <div
        css={css`
          margin: auto;
          width: 25%;
        `}
      >
        <Styled.a
          css={css`
            top: auto;
            clip: rect(0, 0, 0, 0);
            overflow: hidden;
            position: absolute;
            &:focus {
              clip: auto;
              position: relative;
              height: auto;
              overflow: visible;
              padding: 10px;
              margin: 10px;
              display: block;
              text-decoration: none;
              text-align: center;
            }
          `}
          href="#main"
        >
          Skip to Main Content
        </Styled.a>
      </div>
      <div>
        <div sx={{ width: "85%", margin: "auto" }}>
          <div
            sx={{
              p: 3,

              display: "flex",
              justifyContent: "space-between",

              "@media screen and (max-width: 50rem)": {
                flexWrap: "wrap",
                justifyContent: "center",
              },
            }}
          >
            <Logo />
            <Menu />

            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};
