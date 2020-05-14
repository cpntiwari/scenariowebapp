import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import UnderConstruction from "../components/UnderConstruction";
import { shallow } from "enzyme";
let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<UnderConstruction />);
});

describe("Under Construction Component Rendering", () => {
  test("should test Under construction component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should render a <Container /> to display the maximum length ", () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  test("should render a <Typography /> to display the maximum length of the comment", () => {
    expect(wrapper.find(Typography)).toHaveLength(3);
  });
});
