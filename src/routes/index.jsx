import { Routes as RoutesContainer, Route } from "react-router-dom";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Product from "pages/Product";
import Header from "components/Header";

const Routes = () => {
  return (
    <>
      <Header />
      <RoutesContainer>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<Product />} />
      </RoutesContainer>
    </>
  );
};

export default Routes;
