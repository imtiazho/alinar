import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../ProductDetailsCard/ProductDetailsCard";

const AbayaCardDetails = () => {
  const { abayaDetailsId } = useParams();

  const { isLoading, error, data } = useQuery("abaya", () =>
    fetch(`http://localhost:5000/abaya/${abayaDetailsId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ProductDetailsCard data={data} key={data._id} />;
};

export default AbayaCardDetails;
