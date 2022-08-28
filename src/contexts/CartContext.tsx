import { createContext, useContext, useState } from "react";
import {
  CartContextProps,
  CartItem,
  ShoppingCartProviderProps,
} from "types/interfaces";

const CartContext = createContext({} as CartContextProps);

export const useCartItems = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addProducts = (id: number) => {
    const findCartItemById = cartItems.find((item) => item.id === id);

    if (findCartItemById) {
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
    const findCartItemQuantityById = cartItems.find(
      (item) => item.id === id
    )?.quantity;

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

  const getCartTotalItemsQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProducts,
        removeProducts,
        getCartTotalItemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
