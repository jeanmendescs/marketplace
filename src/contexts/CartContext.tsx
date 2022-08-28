import { createContext } from "react";

type CartContext = {
  id: number;
  quantity: number;
}[];

interface Cart {
  cartItems: CartContext;
  setCartItems: React.Dispatch<React.SetStateAction<CartContext>>;
}

export const CartContext = createContext({} as Cart);
