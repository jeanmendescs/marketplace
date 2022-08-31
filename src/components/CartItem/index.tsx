import { CartItem as ICartItem } from "types/interfaces";
import PRODUCTS from "data/products.json";
import { formatCurrency } from "utils/formatCurrency";
import { useCartItems } from "contexts/CartContext";

const CartItem = ({ id, quantity }: ICartItem) => {
  const { addProducts, removeProducts, getCartItemQuantity } = useCartItems();
  const findProductByCartItemId = PRODUCTS.find((product) => product.id === id);

  return (
    <>
      {findProductByCartItemId && (
        <div className="cart-item">
          <div className="image-wrapper">
            {findProductByCartItemId.imageName && (
              <div className="image-container">
                <img
                  src={require(`assets/${findProductByCartItemId.imageName}`)}
                  alt={findProductByCartItemId.imageAlt}
                />
              </div>
            )}
          </div>

          <div className="container">
            <h1 className="title">{findProductByCartItemId.name}</h1>

            <strong className="currency">
              {formatCurrency(findProductByCartItemId.price)}
            </strong>

            <div className="actions remove-gutter">
              <button
                type="button"
                onClick={() => {
                  addProducts(findProductByCartItemId.id);
                }}
              >
                {"\u002b"}
              </button>
              <strong className="quantity">{quantity}</strong>
              <button
                type="button"
                onClick={() => removeProducts(findProductByCartItemId.id)}
              >
                {"\u2212"}
              </button>
            </div>
            <strong className="currency">
              Total: {formatCurrency(findProductByCartItemId.price * quantity)}
            </strong>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
