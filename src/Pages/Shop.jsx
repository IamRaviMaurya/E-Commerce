import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = (props) => {
  if (props.category === "E-Commerce") {
    return (
      <div>
        <Hero />
        <Popular />
        <Offer />
        <NewCollection />
        <NewsLetter />
      </div>
    );
  } else return null;
};

export default Shop;
