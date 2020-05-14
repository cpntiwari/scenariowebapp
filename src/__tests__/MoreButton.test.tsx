import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MoreButton from "../components/common/MoreButton";
import { shallow } from "enzyme";
let wrapper: any;

beforeEach(() => {
  wrapper = shallow(<MoreButton />);
});

describe("More Button Component Rendering", () => {
  test("should test More Button component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
