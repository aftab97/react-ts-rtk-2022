import React from "react";
import renderer from "react-test-renderer";
import Chart from "./Chart";

//when first created creates a file in the test dir creating a SS of the button component and will
//check to see if any changes occur and if they do not match then it fails
it("renders correctly", () => {
  const tree = renderer.create(<Chart />).toJSON();
  expect(tree).toMatchSnapshot();
});

// snapshots are used when someone makes change to your code without permission so that way its a fail safe from stopping
//unexpected code being merged into the master branch
