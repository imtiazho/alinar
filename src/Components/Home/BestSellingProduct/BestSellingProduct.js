import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";
import Spinner from "../../Spinner/Spinner";
import "./BestSellingProduct.css";

const BestSellingProduct = () => {
  const { isLoading, error, data } = useQuery("bestSellingProduct", () =>
    fetch("http://localhost:5000/allProducts").then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  // step 1: make an empty array
  const bestSellingPro = [];

  // Step 2: Sort the array
  data?.sort((a, b) => b.delivered - a.delivered);

  // Step 3: Extract the top 3 numbers
  const top3Produtcs = data.slice(0, 3).map(obj => bestSellingPro.push(obj));

  return (
    <div className="best-selling-product">
      <h2 className="sention-title">
        <p>Alinar</p> BEST SELLING PRODUCT
      </h2>
      <div className="common-product-section">
        {bestSellingPro?.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProduct;
