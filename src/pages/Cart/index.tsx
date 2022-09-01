import { useCartItems } from "contexts/CartContext";
import CartItem from "components/CartItem";
import { formatCurrency } from "utils/formatCurrency";
import "./styles.css";

const Cart = () => {
  const { cartItems, getCartItemsTotalPrice } = useCartItems();

  return (
    <div className="cart">
      {!!cartItems.length ? (
        <>
          <p>Are you ready to purchase these?</p>
          <ul>
            {cartItems.map((cartItem) => (
              <li>
                <CartItem
                  id={cartItem.id}
                  quantity={cartItem.quantity}
                  key={cartItem.id}
                />
              </li>
            ))}
          </ul>
          <h2 className="total">
            Final price: {formatCurrency(getCartItemsTotalPrice)}
          </h2>
        </>
      ) : (
        "Your shopping cart is empty."
      )}
    </div>
  );
};

export default Cart;
