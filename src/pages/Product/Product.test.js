import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "App";
import userEvent from "@testing-library/user-event";
import Product from "pages/Product";

const renderRoute = () => {
  const route = "/products/1";

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
};

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
    renderRoute();

    const image = await screen.findByRole("img", { name: /^Product/i });
    await waitFor(() => expect(image).toBeInTheDocument());
  });

  it("should increase product quantity after click on Add To Cart button", async () => {
    renderRoute();

    const addToCartButton = await screen.findByRole("button", {
      name: "Add to Cart",
    });
    const quantity = await screen.findByText("Quantity: 0");
    userEvent.click(addToCartButton);
    expect(quantity).toHaveTextContent("Quantity: 1");
  });

  it("should decrease product quantity after click on Remove from Cart button", async () => {
    renderRoute();

    const removeFromCartButton = await screen.findByRole("button", {
      name: "Remove from Cart",
    });
    const addToCartButton = await screen.findByRole("button", {
      name: "Add to Cart",
    });
    const quantity = await screen.findByText("Quantity: 0");
    userEvent.click(addToCartButton);
    userEvent.click(removeFromCartButton);
    expect(quantity).toHaveTextContent("Quantity: 0");
  });
});
