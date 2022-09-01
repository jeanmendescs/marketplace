import { render, screen } from "@testing-library/react";
import { CartContext } from "contexts/CartContext";
import React from "react";

describe("Cart", () => {
  it("should display given quantity", () => {
    const TestComponent = () => {
      const { cartItems } = React.useContext(CartContext);

      return (
        <>
          {cartItems.map((item) => (
            <li key={item.quantity}>{item.quantity}</li>
          ))}
        </>
      );
    };

    render(
      <CartContext.Provider value={{ cartItems: [{ id: 1, quantity: 22 }] }}>
        <TestComponent />
      </CartContext.Provider>
    );

    const quantity = screen.getByRole("listitem");
    expect(quantity).toHaveTextContent("22");
  });
});
