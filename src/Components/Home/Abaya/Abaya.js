import React from "react";
import { useQuery } from "react-query";
import "./Abaya.css";
import ProductCard from "../../ProductCard/ProductCard";

const Abaya = () => {
  const {
    isLoading,
    error,
    data: abayas,
  } = useQuery("abayaData", () =>
    fetch("http://localhost:5000/abayas/abaya").then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="common-product-section">
      {abayas.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Abaya;
