import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(cleanup);

test("input should be initially empty", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInputElement, "test@example.com");
  expect(emailInputElement.value).toBe("test@example.com");
});

test("should be able to type a password", () => {
  render(<App />);
  const passwordInputElement = screen.getByLabelText("Password");
  userEvent.type(passwordInputElement, "password!");
  expect(passwordInputElement.value).toBe("password!");
});

test("should be able to type confirm password", () => {
  render(<App />);
  const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
  userEvent.type(confirmPasswordInputElement, "password!");
  expect(confirmPasswordInputElement.value).toBe("password!");
});

test("should show email error message on invalid email", () => {
  render(<App />);
  const emailErrorElement = screen.queryByText(
    /the email you wrote is invalid/i
  );
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });
  userEvent.type(emailInputElement, "invalid-email");
  userEvent.click(submitBtnElement);
  expect(emailErrorElement).toBeInTheDocument();
});

