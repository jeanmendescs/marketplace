import { useEffect, useState } from "react";
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
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>(initialState);

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

          <button onClick={() => console.warn("Not implemented!")}>
            Add to cart
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
