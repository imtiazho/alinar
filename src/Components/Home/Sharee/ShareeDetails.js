import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../ProductDetailsCard/ProductDetailsCard";
import Spinner from "../../Spinner/Spinner";

const ShareeDetails = () => {
  const { shareeId } = useParams();
  const { isLoading, error, data } = useQuery("sharee", () =>
    fetch(`http://server.alinarbd.com/sharee/${shareeId}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return <ProductDetailsCard data={data} key={data._id} />;
};

export default ShareeDetails;
