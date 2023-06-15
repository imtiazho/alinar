import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ProductCard = ({ product, index }) => {
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
    <Link data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1000" to={`/${path}/${_id}`} className="product-card">
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
