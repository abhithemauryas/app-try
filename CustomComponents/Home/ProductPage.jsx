import "../Styles/ProductPage.css";
import { Heart } from "lucide-react";

const ProductPage = ({ item }) => {
  return (
    <div className="product-container">
      <div className="image-wrapper">
        <img src={item.url} alt="Product Image" />
      </div>
      <div className="product-details ">
        <h2>{item.name}</h2>
        <p>
          <a style={{ textDecoration: "underline" }} href="/login">
            Sign in
          </a>
          &nbsp; or Create an account to see pricing{" "}
          <Heart className="heart-icon" />
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
