import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ShopProductDetails = () => {
  const { shopProductDetailsId } = useParams();

  const { isLoading, error, data } = useQuery("shopProducts", () =>
    fetch(`http://localhost:5000/allProducts/${shopProductDetailsId}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <ProductDetailsCard data={data} key={data._id} />;
};

export default ShopProductDetails;
