import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";

const Sharee = () => {
  const {
    isLoading,
    error,
    data: sharees,
  } = useQuery("shareeData", () =>
    fetch("http://localhost:5000/sharees").then((res) => res.json())
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="common-product-section">
      {sharees.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Sharee;
