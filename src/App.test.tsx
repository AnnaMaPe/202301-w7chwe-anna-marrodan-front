import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("Whent it is rendered", () => {
    test("Then it should show a heading with the title 'Register'", () => {
      const expectedText = "Register";

      render(
        <>
          <App />
        </>
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
