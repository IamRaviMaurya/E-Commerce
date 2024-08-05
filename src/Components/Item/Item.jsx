import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="/"></img>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        <i class="fa fa-inr"></i>{props.new_price}
        </div>
        <div className="item-price-old">
        <i class="fa fa-inr"></i>{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
