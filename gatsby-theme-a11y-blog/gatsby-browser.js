import "./src/styles/global.css";
import "focus-visible/dist/focus-visible";
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
import PropTypes from 'prop-types';

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.object.isRequired,
};

