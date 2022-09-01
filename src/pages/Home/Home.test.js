import { render, screen } from "@testing-library/react";
import Home from "pages/Home";
import PRODUCTS from "data/products.json";
import { BrowserRouter } from "react-router-dom";

const productA = PRODUCTS[0];

describe("Home", () => {
  it("should render products", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const image = await screen.findByRole("img", { name: productA.imageAlt });
    const title = await screen.findByText(productA.name);
    const currencies = await screen.findAllByTestId("currency");

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(currencies[0]).toHaveTextContent(productA.price);
  });
});
