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
    fetch("http://server.alinarbd.com/sharees/sharee").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="common-product-section">
      {sharees.slice(0, 3)?.map((product, index) => (
        <ProductCard key={product._id} product={product} index={index}></ProductCard>
      ))}
    </div>
  );
};

export default Sharee;
