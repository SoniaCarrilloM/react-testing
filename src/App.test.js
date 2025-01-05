// filepath: /C:/Users/carri/Documents/GitHub/react-testing/src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("input should be initially empty", () => {
  render(<App />);
  const emailInput = screen.getByRole("textbox");
  const passwordInput = screen.getByLabelText(/password/);
  expect(emailInput.value).toBe("");
  expect(passwordInput.value).toBe("");
});
