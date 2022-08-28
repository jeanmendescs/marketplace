import { useState } from "react";
import Routes from "./routes";
import { CartContext } from "./contexts/CartContext";

type CartContext = {
  id: number;
  quantity: number;
}[];

const App = () => {
  const [cartItems, setCartItems] = useState<CartContext>([]);

  return (
    <main>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Routes />
      </CartContext.Provider>
    </main>
  );
};

export default App;
