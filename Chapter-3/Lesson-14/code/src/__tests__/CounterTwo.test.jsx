import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CounterTwo from "../pages/CounterTwo";

afterEach(cleanup);

// test cases
// it("test case name", () => {})

it("increment counter", () => {
  const { getByTestId } = render(<CounterTwo />);

  //   when
  fireEvent.click(getByTestId("button-up"));

  //   what
  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrement counter", () => {
  const { getByTestId } = render(<CounterTwo />);

  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("-1");
});

it("should be enabled", () => {
  const { getByTestId } = render(<CounterTwo />);
  expect(getByTestId("button-down")).not.toHaveAttribute("disabled");
});
