import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../ProductDetailsCard/ProductDetailsCard";

const ThreePisDetails = () => {
  const { threePisDetailsId } = useParams();
  const { isLoading, error, data } = useQuery("threePis", () =>
    fetch(`http://localhost:5000/threePis/${threePisDetailsId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ProductDetailsCard data={data} key={data._id} />;
};

export default ThreePisDetails;
