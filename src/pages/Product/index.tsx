import pictureA from "assets/a.jpg";
import pictureB from "assets/b.jpg";

const Product = () => {
  return (
    <div>
      <h1>Product B</h1>
      <p>Price: 30 USD</p>

      <button onClick={() => console.warn("Not implemented!")}>
        Add to cart
      </button>

      <div>
        <img src={pictureB} width={640} alt="product" />
      </div>
    </div>
  );
};

export default Product;
