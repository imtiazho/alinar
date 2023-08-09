import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";
import Spinner from "../../Spinner/Spinner";

const ThreePis = () => {
  const {
    isLoading,
    error,
    data: threePises,
  } = useQuery("threePisData", () =>
    fetch("http://server.alinarbd.com/threePises/threePis").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="common-product-section">
      {threePises.slice(0, 3)?.map((product, index) => (
        <ProductCard product={product} key={product._id} index={index}></ProductCard>
      ))}
    </div>
  );
};

export default ThreePis;
