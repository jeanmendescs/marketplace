import Routes from "./routes";
import { CartContextProvider } from "contexts/CartContext";

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
