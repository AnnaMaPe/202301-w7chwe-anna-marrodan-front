import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Register'", () => {
      const expectedText = "Register";

      render(<RegisterForm />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
