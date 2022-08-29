import { render, screen } from "@testing-library/react";
import Product from "pages/Product";

describe("Product", () => {
  it("should start without any product listed", () => {
    render(<Product />);
    expect(
      screen.getByRole("heading", {
        name: "Resource unavailable!",
      })
    ).toBeInTheDocument();
  });
});
