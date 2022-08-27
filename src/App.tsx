import { useState } from "react";
import Routes from "./routes";
import { CartContext } from "./contexts/CartContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Routes />
      </CartContext.Provider>
    </main>
  );
};

export default App;
