import { Link } from "react-router-dom";
import { useCartItems } from "contexts/CartContext";

const Header = () => {
  const { getCartItemsTotalQuantity: getCartTotalItemsQuantity } =
    useCartItems();
  return (
    <nav>
      <header>
        90s shop
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/cart">Cart {getCartTotalItemsQuantity}</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </nav>
  );
};

export default Header;
