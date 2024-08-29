import React from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-omg-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <img src={product.image} alt="" />
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-star">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-price">
          <div className="product-display-right-price-old">
            <i class="fa fa-inr"></i>
            {product.old_price}
          </div>
          <div className="product-display-right-price-new">
            <i class="fa fa-inr"></i>
            {product.new_price}
          </div>
        </div>
        <div className="product-display-right-decryption">
          Indulge in the timeless elegance of our pink handwoven clothe.
          Adorned with intricate zari work, this saree captures the essence of
          Indian craftsmanship. Its rich colour scheme and luxurious drape make
          it a true masterpiece. This clothe is perfect for weddings and
          festivities.
        </div>
        <div className="product-display-right-size-chart">
          <h1>Select Size</h1>
          <div className="product-display-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add To Cart</button>
        <p className="product-display-right-category"><span>Category :</span>Women, T- Shirt, Crop- Top</p>
        <p className="product-display-right-category"><span>Tags :</span>Modern, Latest, Fashion</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
