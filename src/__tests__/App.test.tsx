import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import App from "../App";
import { ScenarioManager } from "../components/ScenarioManager";
import UnderConstruction from "../components/UnderConstruction";

test("Should render table when user calls home URL", () => {
  const globalAny: any = global;
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  const mockFetchPromise = Promise.resolve({
    // 3
    json: () => mockJsonPromise,
  });
  globalAny.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(ScenarioManager)).toHaveLength(1);
  expect(wrapper.find(UnderConstruction)).toHaveLength(0);
});
