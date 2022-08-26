import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";

const RouteList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/products/:productsId"
          element={<Product cartItems={[]} />}
        />
      </Routes>
    </Router>
  );
};

export default RouteList;
