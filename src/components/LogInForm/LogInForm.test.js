import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import LogInForm from "./LogInForm";

afterEach(() => {
  cleanup();
});

test("test", () => {
  expect(true).toBe(true);
});

test("should render LogInForm component", () => {
  render(<LogInForm />);
  const loginformElem = screen.getByTestId("login-1");
  expect(loginformElem).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer.create(<LogInForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test("should accept valid password inputs", () => {
//   render(<LogInForm />);
//   const handleChange = jest.fn();
//   const passwordInput = screen.findByPlaceholderText("Password");
//   const validPassword = "Natalie09-";
//   fireEvent.change(passwordInput, validPassword);
//   expect(handleChange).toBe(true);
// });

// test("should not accept valid password inputs", () => {});

// test("should implement privacy measures on password", () => {});

// last 4 digits of password should be * when length >= 5
// can't contain ~ ` < >
// length must be between 5 and 12

// ONLY THROW REAL ERRORS ON SUBMIT
// otherwise, just display information on page
