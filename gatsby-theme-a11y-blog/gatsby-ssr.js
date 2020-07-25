import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
