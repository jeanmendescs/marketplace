import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      Welcome to our shop!
      <p>
        You are probably interested in <Link to="/product/1">A</Link>
      </p>
      <p>
        Check out the newest product <Link to="/product/2">B</Link>!
      </p>
    </div>
  );
};

export default Home;
