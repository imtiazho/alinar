import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    handCodedId,
    name,
    priceSet,
    stock,
    img,
    ratings,
    deliveryInDhaka,
    deliveryOutDhaka,
    shortDesc,
    typeOfProduct,
    body,
    Long,
    colorGurrenty,
    quantity,
    priceJustSharee,
    shareeLong,
    productMaterial,
    panjabiSize,
    note,
    pantMaterial,
    brand,
    dupattaMaterial,
    category,
  } = product;

  let path;
  if (handCodedId?.includes("sharee")) {
    path = "shareeDetails";
  } else if (handCodedId?.includes("abaya")) {
    path = "abayaDetails";
  } else if (handCodedId?.includes("threePis")) {
    path = "threePisDetails";
  } else if (handCodedId?.includes("shopProducts")) {
    path = "shopProductDetail";
  }

  return (
    <Link to={`/${path}/${_id}`} className="product-card">
      <img src={img} alt="" />

      <div className="product-short-info">
        {name && <h3>{name.length > 33 ? name.slice(0, 30) + "..." : name}</h3>}
        {priceSet && <p>Price: {priceSet} BDT</p>}
        {priceJustSharee && (
          <p>
            Only Sharee Price: {priceJustSharee} BDT{" "}
            <span className="red-span">*</span>
          </p>
        )}
      </div>

      <button className="btn">
        Click for details <i className="fa-solid fa-circle-info"></i>
      </button>
    </Link>
  );
};

export default ProductCard;
