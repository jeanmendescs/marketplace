import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to our shop!
      <p>
        You are probably interested in <Link to="/products/1">A</Link>
      </p>
      <p>
        Check out the newest product <Link to="/products/2">B</Link>!
      </p>
    </div>
  );
};

export default Home;
