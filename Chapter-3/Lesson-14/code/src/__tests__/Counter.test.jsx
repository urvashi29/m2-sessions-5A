import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Counter from "../pages/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducer";

const renderWithRedux = (
  component,
  { initState, store = createStore(reducer, initState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

it("increment through redux", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initState: { counter: 5 },
  });

  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("6");
});

it("increment through redux", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initState: { counter: 5 },
  });

  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("4");
});
