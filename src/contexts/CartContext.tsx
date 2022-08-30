import { createContext, useContext, useState } from "react";
import {
  CartContextProps,
  CartItem,
  ShoppingCartProviderProps,
} from "types/interfaces";
import PRODUCTS from "data/products.json";

const CartContext = createContext({} as CartContextProps);

export const useCartItems = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const findCartItemById = (id: number) =>
    cartItems.find((item) => item.id === id);

  const addProducts = (id: number) => {
    if (findCartItemById(id)) {
      return setCartItems((prev) => {
        const increasedCartItems = prev.map((item) => {
          if (item.id === id) {
            return { id, quantity: item.quantity++ };
          }
          return item;
        });
        return increasedCartItems;
      });
    }

    setCartItems((prev) => [...prev, { id, quantity: 1 }]);
  };

  const removeProducts = (id: number) => {
    const findCartItemQuantityById = findCartItemById(id)?.quantity;

    if (!findCartItemQuantityById) {
      return;
    }

    if (findCartItemQuantityById) {
      setCartItems((prev) => {
        if (findCartItemQuantityById === 1) {
          return prev.filter((prevItem) => prevItem.id !== id);
        }

        const decreasedCartItems = prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity-- };
          }
          return item;
        });

        return decreasedCartItems;
      });
    }
  };

  const getCartItemsTotalQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getCartItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const getCartItemsTotalPrice = cartItems.reduce((total, cartItem) => {
    const findProductByCartItemId = PRODUCTS.find(
      (item) => item.id === cartItem.id
    );
    return total + (findProductByCartItemId?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProducts,
        removeProducts,
        getCartItemsTotalQuantity,
        getCartItemsTotalPrice,
        getCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
