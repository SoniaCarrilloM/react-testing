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
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });

  expect(emailErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, "selentagmail.com");
  userEvent.click(submitBtnElement);

  const emailErrorElementAgain = screen.queryByText(
    /the email you wrote is invalid/i
  );
  expect(emailErrorElementAgain).toBeInTheDocument();
});

test("should show password error if password is less than five characters", () => {
  render(<App />);

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });

  const passwordInputElement = screen.getByLabelText("Password");
  const passwordErrorElement = screen.queryByText(
    /the password should be at least 6 characters long/i
  );

  userEvent.type(emailInputElement, "selena@gmail.com");

  expect(passwordErrorElement).not.toBeInTheDocument();

  userEvent.type(passwordInputElement, "123");
  userEvent.click(submitBtnElement);

  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });

  const passwordErrorElementAgain = screen.queryByText(
    /the password should be at least 6 characters long/i
  );
  expect(passwordErrorElementAgain).toBeInTheDocument();
});

test("should show password error message on password mismatch", () => {
  render(<App />);
  const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
  const passwordInputElement = screen.getByLabelText("Password");
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });
  userEvent.type(passwordInputElement, "password!");

  userEvent.type(confirmPasswordInputElement, "password!!");
  userEvent.click(submitBtnElement);
  const passwordErrorElement = screen.queryByText(
    /the passwords don't match. Try again./i
  );
});
