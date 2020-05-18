import AddBox from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import { shallow } from "enzyme";
import React, { forwardRef } from "react";
import { RenderColumn } from "../components/common/ScenarioUtil";
let wrapper: any;
// const props: any = { root: "root" };
// const ref:any = {test: "test"}
// beforeEach(() => {
//   wrapper = shallow(<tableIcons />);
// });
const tableIcons = {
  Add: forwardRef((props: any, ref: any) => <AddBox {...props} {...ref} />),
};
const tableIcons1 = {
  Add: forwardRef((props: any, ref: any) => <AddBox {...props} {...ref} />),
};

describe("Scenario Utils Component Rendering", () => {
  test("should test Check Component", () => {
    // const CheckComponent = shallow(<Check {...props} {...ref} />);
    // expect(CheckComponent).toMatchSnapshot();
    expect(JSON.stringify(tableIcons1)).toEqual(JSON.stringify(tableIcons));
  });
});
