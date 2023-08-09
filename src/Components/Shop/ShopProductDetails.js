import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import Spinner from "../Spinner/Spinner";

const ShopProductDetails = () => {
  const { shopProductDetailsId } = useParams();

  const { isLoading, error, data } = useQuery("shopProducts", () =>
    fetch(`http://server.alinarbd.com/allProducts/${shopProductDetailsId}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Spinner />;
  }
  return <ProductDetailsCard data={data} key={data._id} />;
};

export default ShopProductDetails;
