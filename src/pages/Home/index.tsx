import axios from "axios";
import CartItem from "components/CartItem";
import { useEffect, useState } from "react";
import { Product } from "types/interfaces";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("cgtrader.test.com/products")
      .then(({ data }) => setProducts(data))
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  }, []);

  return (
    <div className="home">
      Welcome to our shop!
      {!!products.length && (
        <div className="products">
          {products.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              quantity={0}
              hideActionButtonsAndTotal
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
