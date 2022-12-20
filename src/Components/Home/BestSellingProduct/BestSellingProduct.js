import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";
import "./BestSellingProduct.css";

const BestSellingProduct = () => {
  const { isLoading, error, data } = useQuery("bestSellingProduct", () =>
    fetch("http://localhost:5000/bestSellingProduct").then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="best-selling-product">
      <h2 className="sention-title">
        <p>Alinar</p> BEST SELLING PRODUCT
      </h2>
      <div className="common-product-section">
        {data.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProduct;
