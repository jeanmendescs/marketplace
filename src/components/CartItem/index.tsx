import { CartItem as ICartItem } from "types/interfaces";
import PRODUCTS from "data/products.json";

const CartItem = ({ id, quantity }: ICartItem) => {
  const findProductByCartItemId = PRODUCTS.find((product) => product.id === id);

  return (
    <>
      {findProductByCartItemId && (
        <div>
          <span>{quantity}</span>
          <span>{findProductByCartItemId.name}</span>
          <span>{findProductByCartItemId.description}</span>
          <span>{findProductByCartItemId.price}</span>
          <span>{quantity}</span>
          <span>Total: {quantity * findProductByCartItemId.price}</span>
          <img
            src={require(`assets/${findProductByCartItemId.imageName}`)}
            width={320}
            alt={findProductByCartItemId.imageAlt}
          />
        </div>
      )}
    </>
  );
};

export default CartItem;
