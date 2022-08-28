import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <header>
        90s shop
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <Link to="/">Home </Link>
            </li>
            |
            <li>
              <Link to="/cart">Cart ({[].length})</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </nav>
  );
};

export default Header;
