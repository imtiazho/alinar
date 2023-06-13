import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../ProductCard/ProductCard";
import Spinner from "../../Spinner/Spinner";
import "./BestSellingProduct.css";

const BestSellingProduct = ({ bestSellingPro }) => {

  return (
    <div className="best-selling-product">
      <h2 className="sention-title">
        <p>Alinar</p> BEST SELLING PRODUCT
      </h2>
      <div className="common-product-section">
        {bestSellingPro?.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProduct;
