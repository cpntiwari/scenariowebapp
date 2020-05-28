import React from "react";
import MoreButton from "./MoreButton";
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
