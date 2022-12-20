import React from "react";
import "./ProductDetailsCard.css";

const ProductDetailsCard = ({ data }) => {
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
  } = data;

  return (
    <div className="product-details">
      <div className="first-row">
        {img && (
          <div className="image">
            <img src={img} alt="" />
          </div>
        )}

        <div className="pd-info-cart">
          <div className="product-info">
            {name && <h2>{name}</h2>}
            {typeOfProduct && <h4>Type of product : {typeOfProduct}</h4>}
            {shortDesc && <p>Short Description : {shortDesc}</p>}
            {body && <p>{body}</p>}
            {productMaterial && <p>Product Material : {productMaterial}</p>}
            {pantMaterial && <p>Pant Material : {pantMaterial}</p>}
            {dupattaMaterial && <p>Dupatta Material : {dupattaMaterial}</p>}
            {priceSet && <p>Price : {priceSet} BDT</p>}
            {stock && <p>Stock : {stock}</p>}
            {priceJustSharee && (
              <p>
                Price only sharee : {priceJustSharee} BDT <span>*</span>
              </p>
            )}
          </div>

          <div className="cart-btn">
            <button className="btn">
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
            {/* <p> <span>*</span>প্রোডাক্টের কোয়ান্টিটি বাড়াতে আবার ক্লিক করুন</p> */}
          </div>
        </div>
      </div>

      <div className="second-row">
        <div className="short-nav-product-details">
          <h2 className="sub-title-product-details">
            Details Infomation of {name}
          </h2>

          <div className="more-info">
            {typeOfProduct && <h4>Type of product : {typeOfProduct}</h4>}
            {shortDesc && <p>Short Details : {shortDesc}</p>}
            {body && <p>Size : {body}</p>}
            {productMaterial && <p>Product Material : {productMaterial}</p>}
            {Long && <p>Sharee Long : {Long}</p>}
            {pantMaterial && <p>Pant Material : {pantMaterial}</p>}
            {dupattaMaterial && <p>Dupatta Material : {dupattaMaterial}</p>}
            {brand && <p>Brand : {brand}</p>}
            {category && <p>Category : {category}</p>}
            {priceSet && <p>Price : {priceSet} BDT</p>}
            {priceJustSharee && (
              <p>
                Price only sharee : {priceJustSharee} BDT{" "}
                <span className="red-span">*</span>
              </p>
            )}
            {shareeLong && <p>Share Long : {shareeLong}</p>}
            {colorGurrenty && <p>Colour Guarantee : {colorGurrenty}</p>}
            {panjabiSize && <p>Panjabi Size : {panjabiSize}</p>}
            {ratings && <p>Ratings : {ratings} stars</p>}
            {deliveryInDhaka && (
              <p>
                Delivery Charge : {deliveryInDhaka} BDT{" "}
                <span className="sub-text">
                  <span className="red-span">*</span> Inside Dhaka
                </span>
              </p>
            )}
            {deliveryOutDhaka && (
              <p>
                Delivery Charge : {deliveryOutDhaka} BDT{" "}
                <span className="sub-text">
                  <span className="red-span">*</span>Outside Dhaka
                </span>
              </p>
            )}
            {note && (
              <p>
                Note: {note}
                <span className="red-span">*</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
