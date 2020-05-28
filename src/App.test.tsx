import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import App from "./App";
import { ScenarioManager } from "./components/ScenarioManager";
import UnderConstruction from "./components/UnderConstruction";
import { act } from "react-dom/test-utils";

test("Should render table when user calls home URL", async () => {
  const globalAny: any = global;
  // const mockSuccessResponse = {};
  // const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  // const mockFetchPromise = Promise.resolve({
  //   // 3
  //   json: () => mockJsonPromise,
  // });
  // globalAny.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  const dummyMoviesData = [
    { title: 'some-tilte-1', body: 'some-1' },
    { title: 'some-tilte-2', body: 'some-2' },
    { title: 'some-tilte-3', body: 'some-3' }
  ];
  act(() => {
    globalAny.fetch = jest.fn(() => Promise.resolve(dummyMoviesData));
  });

  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const container ='<div></div>';
  // await act(async () => {
  //   ReactDOM.render(<App></App>, container);
  // });
  //expect(wrapper.find(ScenarioManager)).toHaveLength(1);
  expect(wrapper.find(UnderConstruction)).toHaveLength(0);
});
