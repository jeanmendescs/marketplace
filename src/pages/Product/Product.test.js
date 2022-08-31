import { render, screen } from "@testing-library/react";
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

const plusSign = "\u002b";
const minusSign = "\u2212";

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
    const title = await screen.findByText("Product A");
    const description = await screen.findByText(/^Lorem ipsum dolor sit amet/i);
    const quantity = await screen.findByTestId("quantity");
    const currency = await screen.findByTestId("currency");

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
  });

  it("should increase product quantity after click add To Cart", async () => {
    renderRoute();

    const addToCartButton = await screen.findByRole("button", {
      name: plusSign,
    });
    const quantity = await screen.findByTestId("quantity");

    userEvent.click(addToCartButton);
    expect(quantity).toHaveTextContent("1");
  });

  it("should decrease product quantity after click to remove from Cart", async () => {
    renderRoute();

    const addToCartButton = await screen.findByRole("button", {
      name: plusSign,
    });
    const removeFromCartButton = await screen.findByRole("button", {
      name: minusSign,
    });

    const quantity = await screen.findByTestId("quantity");
    userEvent.click(addToCartButton);
    userEvent.click(removeFromCartButton);
    expect(quantity).toHaveTextContent("0");
  });
});
