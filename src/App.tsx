import Routes from "./routes";
import { CartContextProvider } from "contexts/CartContext";
import "./styles.css";

const App = () => {
  return (
    <main>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </main>
  );
};

export default App;
