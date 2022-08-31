import { useCartItems } from "contexts/CartContext";
import CartItem from "components/CartItem";

const Cart = () => {
  const { cartItems, getCartItemsTotalPrice } = useCartItems();

  return (
    <div className="cart">
      {!!cartItems.length ? (
        <>
          Are you ready to purchase these?
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
          <span>Total: {getCartItemsTotalPrice}</span>
        </>
      ) : (
        "Your shopping cart is empty."
      )}
    </div>
  );
};

export default Cart;
