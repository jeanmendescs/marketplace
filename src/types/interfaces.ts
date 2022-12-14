export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageName: string;
  imageAlt: string;
}

export interface CartItem {
  id: number;
  quantity: number;
  hideActionButtonsAndTotal?: boolean;
}

export interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addProducts: (id: number) => void;
  removeProducts: (id: number) => void;
  getCartItemsTotalQuantity: number;
  getCartItemsTotalPrice: number;
  getCartItemQuantity: (id: number) => number;
}
