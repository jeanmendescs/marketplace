import { useCartItems } from "contexts/CartContext";
import CartItem from "components/CartItem";

const Cart = () => {
  const { cartItems, getCartItemsTotalPrice } = useCartItems();

  return (
    <>
      {!!cartItems.length ? (
        <div>
          Are you ready to purchase these?
          <ul>
            {cartItems.map((cartItem) => (
              <CartItem
                id={cartItem.id}
                quantity={cartItem.quantity}
                key={cartItem.id}
              />
            ))}
          </ul>
          <span>Total: {getCartItemsTotalPrice}</span>
        </div>
      ) : (
        "Your shopping cart is empty."
      )}
    </>
  );
};

export default Cart;
