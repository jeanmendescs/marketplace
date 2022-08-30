import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product as IProduct } from "types/interfaces";
import { useCartItems } from "contexts/CartContext";
import axios from "axios";

const initialState: IProduct = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  imageName: "",
  imageAlt: "",
};

const Product = () => {
  const { productId } = useParams();
  const { addProducts, removeProducts, getCartItemQuantity } = useCartItems();
  const [product, setProduct] = useState<IProduct>(initialState);

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
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {getCartItemQuantity(Number(productId))}</p>

          <button type="button" onClick={() => addProducts(product.id)}>
            Add to Cart
          </button>

          <button type="button" onClick={() => removeProducts(product.id)}>
            Remove from Cart
          </button>

          <div>
            {product.imageName && (
              <img
                src={require(`assets/${product.imageName}`)}
                width={640}
                alt={product.imageAlt}
              />
            )}
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
