import { useState } from "react";
import Routes from "./routes";
import { CartContext } from "./contexts/CartContext";
import Header from "./components/Header";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Header />
        <Routes />
      </CartContext.Provider>
    </main>
  );
};

export default App;
