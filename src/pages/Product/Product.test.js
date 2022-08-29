import { render, screen, waitFor } from "@testing-library/react";
import Product from "pages/Product";
import { MemoryRouter } from "react-router-dom";
import App from "App";

describe("Product", () => {
  it("should start without any product listed", () => {
    render(<Product />);
    expect(
      screen.getByRole("heading", {
        name: "Resource unavailable!",
      })
    ).toBeInTheDocument();
  });

  it("should render a product", async () => {
    const route = "/products/1";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const image = await screen.findByRole("img", { name: /^Product/i });
    await waitFor(() => expect(image).toBeInTheDocument());
  });
});
