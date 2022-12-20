import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../ProductDetailsCard/ProductDetailsCard";

const BestSellingProductsDetails = () => {
  const { bestSellingProductDetailsId } = useParams();
  const { isLoading, error, data } = useQuery("bestSellingProducts", () =>
    fetch(
      `http://localhost:5000/bestSellingProduct/${bestSellingProductDetailsId}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ProductDetailsCard data={data} key={data._id} />;
};

export default BestSellingProductsDetails;
