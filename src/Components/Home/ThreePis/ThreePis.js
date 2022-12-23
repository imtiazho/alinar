import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";

const ThreePis = () => {
  const {
    isLoading,
    error,
    data: threePises,
  } = useQuery("threePisData", () =>
    fetch("http://localhost:5000/threePises/threePis").then((res) => res.json())
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="common-product-section">
      {threePises.map((product) => (
        <ProductCard product={product} key={product._id}></ProductCard>
      ))}
    </div>
  );
};

export default ThreePis;
