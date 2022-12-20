import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
  const { isLoading, error, data } = useQuery("allProducts", () =>
    fetch("http://localhost:5000/allProducts").then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className="shop">
      <div className="shop-search-box">
        <input placeholder="Just type that you want..." type="text" />
      </div>

      <div className="shop-container">
        {data.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
