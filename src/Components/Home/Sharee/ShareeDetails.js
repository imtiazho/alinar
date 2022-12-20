import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../ProductDetailsCard/ProductDetailsCard";

const ShareeDetails = () => {
  const { shareeId } = useParams();
  const { isLoading, error, data } = useQuery("sharee", () =>
    fetch(`http://localhost:5000/sharee/${shareeId}`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ProductDetailsCard data={data} key={data._id} />;
};

export default ShareeDetails;
