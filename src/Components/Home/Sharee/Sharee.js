import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";
import Spinner from "../../Spinner/Spinner";

const Sharee = () => {
  const {
    isLoading,
    error,
    data: sharees,
  } = useQuery("shareeData", () =>
    fetch("http://localhost:5000/sharees/sharee").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
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
