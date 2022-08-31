import { renderRoute } from "utils/renderRoute";
import { screen } from "@testing-library/react";

describe("Header", () => {
  it("should render Cart page", async () => {
    renderRoute("/cart");

    const elements = screen.getAllByRole("navigation");

    expect(elements[2]).toHaveAttribute("href", "/cart");
  });

  it("should render Home page", async () => {
    renderRoute("/");

    const elements = screen.getAllByRole("navigation");

    expect(elements[1]).toHaveAttribute("href", "/");
  });
});
