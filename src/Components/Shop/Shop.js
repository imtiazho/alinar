import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import "./Shop.css";
import HelmetComponent from "../HelmetComponent/HelmetComponent";

const Shop = () => {
  const [query, setQuery] = useState("");
  const { isLoading, error, data } = useQuery("bestSellingProduct", () =>
    fetch("http://localhost:5000/allProducts").then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }
  else {
    return (
      <div className="shop">
        <HelmetComponent pageName={"alinar - shop"} />
        <div className="shop-search-box">
          <input onChange={e => setQuery(e.target.value)} placeholder="Just type that you want..." type="text" />
        </div>

        <div className="shop-container">
          {data.filter(product => product.handCodedId.toLowerCase().includes(query)).map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
      </div>
    );
  }

};

export default Shop;
