import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function cartItems() {
  return [];
}

function App() {
  return (
    <main>
      <header>
        90s shop
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <a href="/">Home</a>
            </li>
            |
            <li>
              <a href="/cart">Cart ({cartItems().length})</a>
            </li>
          </ul>
        </nav>
        <hr />
      </header>

      {window.location.pathname === "/" && <Home />}
      {window.location.pathname === "/products/b" && <Product />}
      {window.location.pathname === "/products/a" && <Product />}
      {window.location.pathname === "/cart" && <Cart cartItems={[]} />}
    </main>
  );
}

export default App;
