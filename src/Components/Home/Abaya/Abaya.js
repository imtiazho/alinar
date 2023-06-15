import React from "react";
import { useQuery } from "react-query";
import "./Abaya.css";
import ProductCard from "../../ProductCard/ProductCard";
import Spinner from "../../Spinner/Spinner";

const Abaya = () => {
  const {
    isLoading,
    error,
    data: abayas,
  } = useQuery("abayaData", () =>
    fetch("http://localhost:5000/abayas/abaya").then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="common-product-section">
      {abayas.slice(0, 3)?.map((product, index) => (
        <ProductCard key={product._id} product={product} index={index}></ProductCard>
      ))}
    </div>
  );
};

export default Abaya;
