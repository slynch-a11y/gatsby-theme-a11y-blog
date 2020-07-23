import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import { useColorMode, Button } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default (Toggle) => {
  const [colorMode, setColorMode] = useColorMode();
  const [ariaPressed, setAriaPressed] = React.useState("false");

  return (
    <div sx={{ marginLeft: "5px" }}>
      <Button
        variant="toggle"
        aria-label="Toggle Dark Mode"
        title="Toggle Dark Mode"
        sx={{ borderRadius: "50%", marginTop: "-7px" }}
        aria-pressed={ariaPressed}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
          setAriaPressed(colorMode === "default" ? "true" : "false");
        }}
      >
        {colorMode === "default" ? (
          <div>
            <FontAwesomeIcon icon={faMoon} aria-hidden="true" />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon icon={faSun} aria-hidden="true" />
          </div>
        )}
      </Button>
    </div>
  );
};
