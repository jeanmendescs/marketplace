import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartItems } from "contexts/CartContext";
import axios from "axios";
import { formatCurrency } from "utils/formatCurrency";
import { initialState } from "./initialState";

const Product = () => {
  const { productId } = useParams();
  const { addProducts, removeProducts, getCartItemQuantity } = useCartItems();
  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    if (productId) {
      axios
        .get("cgtrader.test.com/products")
        .then(({ data }) => {
          const findProductByProductId = data.find(
            (product: { id: number }) => product.id === Number(productId)
          );

          if (findProductByProductId) setProduct(findProductByProductId);
        })
        .catch((err) => console.error(err));
    }
  }, [productId]);

  const hasProduct = Object.values(product).every((value) => value);

  return (
    <>
      {hasProduct ? (
        <div className="product">
          <div className="content">
            <div className="description">
              {product.imageName && (
                <div className="image-wrapper">
                  <div className="image-container">
                    <img
                      src={require(`assets/${product.imageName}`)}
                      alt={product.imageAlt}
                    />
                  </div>
                </div>
              )}
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>
            </div>

            <div className="pricing">
              <strong className="currency">
                {formatCurrency(product.price)}
              </strong>

              <div className="actions">
                <button type="button" onClick={() => addProducts(product.id)}>
                  {"\u002b"}
                </button>
                <strong className="quantity">
                  {getCartItemQuantity(Number(productId))}
                </strong>
                <button
                  type="button"
                  onClick={() => removeProducts(product.id)}
                >
                  {"\u2212"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Resource unavailable!</h1>
        </div>
      )}
    </>
  );
};

export default Product;
