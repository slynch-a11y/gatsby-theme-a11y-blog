import React from "react";
import renderer from "react-test-renderer";

import Logo from "../logo";

describe("Logo", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Logo siteTitle="Default Starter" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
