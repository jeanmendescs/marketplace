const Header = () => {
  return (
    <nav>
      <header>
        90s shop
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <a href="/">Home</a>
            </li>
            |
            <li>
              <a href="/cart">Cart ({[].length})</a>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </nav>
  );
};

export default Header;
