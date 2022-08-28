import { useEffect, useState, useContext } from "react";
import { CartContext } from "contexts/CartContext";
import { useParams } from "react-router-dom";
import { Product as IProduct } from "types/interfaces";
import PRODUCTS from "data/products.json";

const initialState: IProduct = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  imageName: "",
  imageAlt: "",
};

const Product = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>(initialState);

  const addProducts = (id: number) => {
    const findCartItemById = cartItems.find((item) => item.id === id);

    if (findCartItemById) {
      return setCartItems((prev) => {
        const increasedCartItems = prev.map((item) => {
          if (item.id === id) {
            return { id, quantity: item.quantity++ };
          }
          return item;
        });
        return increasedCartItems;
      });
    }

    setCartItems((prev) => [...prev, { id, quantity: 1 }]);
  };

  const removeProducts = (id: number) => {
    const findCartItemQuantityById = cartItems.find(
      (item) => item.id === id
    )?.quantity;

    if (!findCartItemQuantityById) {
      return;
    }

    if (findCartItemQuantityById) {
      setCartItems((prev) => {
        if (findCartItemQuantityById === 1) {
          return prev.filter((prevItem) => prevItem.id !== id);
        }

        const decreasedCartItems = prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity-- };
          }
          return item;
        });

        return decreasedCartItems;
      });
    }
  };

  const getCartTotalItemsQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  useEffect(() => {
    if (productId) {
      const findProductByProductId = PRODUCTS.find(
        (product) => product.id === Number(productId)
      );

      if (findProductByProductId) setProduct(findProductByProductId);
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

          <button type="button" onClick={() => addProducts(product.id)}>
            Add to cart
          </button>

          <button type="button" onClick={() => removeProducts(product.id)}>
            remove to cart 1
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
          <h1>Resource unavailable or doesn't exist!</h1>
        </div>
      )}
    </>
  );
};

export default Product;
