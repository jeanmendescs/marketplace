import "./styles.css";

const Cart = () => {
  return (
    <div>
      Are you ready to purchase these?
      <ul>
        {[]?.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
