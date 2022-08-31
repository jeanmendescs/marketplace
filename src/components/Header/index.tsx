import { Link } from "react-router-dom";
import { useCartItems } from "contexts/CartContext";
import cartIcon from "assets/cart.svg";

const Header = () => {
  const { getCartItemsTotalQuantity: getCartTotalItemsQuantity } =
    useCartItems();
  return (
    <header className="header">
      <h1>Marketplace</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon-wrapper">
              <img src={cartIcon} alt="Cart icon" className="cart-icon" />
              <span className="quantity">{getCartTotalItemsQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
