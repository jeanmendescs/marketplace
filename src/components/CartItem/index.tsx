import { CartItem as ICartItem } from "types/interfaces";
import PRODUCTS from "data/products.json";
import { formatCurrency } from "utils/formatCurrency";
import { useCartItems } from "contexts/CartContext";
import { Link } from "react-router-dom";
import "./styles.css";

const CartItem = ({
  id,
  quantity,
  hideActionButtonsAndTotal = false,
}: ICartItem) => {
  const { addProducts, removeProducts } = useCartItems();
  const findProductByCartItemId = PRODUCTS.find((product) => product.id === id);

  return (
    <>
      {findProductByCartItemId && (
        <div className="cart-item">
          <Link to={`/product/${id}`}>
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
          </Link>

          <div className="container">
            <h1 className="title">{findProductByCartItemId.name}</h1>

            <strong className="currency" data-testid="currency">
              {formatCurrency(findProductByCartItemId.price)}
            </strong>

            {!hideActionButtonsAndTotal && (
              <div className="actions remove-gutter">
                <button
                  type="button"
                  onClick={() => {
                    addProducts(findProductByCartItemId.id);
                  }}
                >
                  {"\u002b"}
                </button>
                <strong className="quantity" data-testid="quantity">
                  {quantity}
                </strong>
                <button
                  type="button"
                  onClick={() => removeProducts(findProductByCartItemId.id)}
                >
                  {"\u2212"}
                </button>
              </div>
            )}
            {!hideActionButtonsAndTotal && (
              <strong className="currency">
                Total:{" "}
                {formatCurrency(findProductByCartItemId.price * quantity)}
              </strong>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
