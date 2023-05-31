import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CartContext } from "../../App";
import { addToLocalStorage } from "../../LocalStorage/ManageLocalStorage";
import "./ProductDetailsCard.css";
import HelmetComponent from "../HelmetComponent/HelmetComponent";

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
  const { cartState, shippingInfoState } = useContext(CartContext);
  const [cart, setCart] = cartState;

  const [productQuantity, setProductQuantity] = useState(1);
  const [deliveryAndShareStatus, setDeliveryAndShareStatus] = useState({
    shareStatus: "",
    deliveryLocation: "",
  });
  const [deliveryAndShareStatusError, setDeliveryAndShareStatusError] =
    useState({
      shareStatusError: "",
      deliveryLocationError: "",
    });

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const aboutShareStaus = (e) => {
    if (e.target.value) {
      setDeliveryAndShareStatus({
        ...deliveryAndShareStatus,
        shareStatus: e.target.value,
      });
    }
  };

  const deliveryDestination = (e) => {
    if (e.target.value) {
      setDeliveryAndShareStatus({
        ...deliveryAndShareStatus,
        deliveryLocation: e.target.value,
      });
    }
  };

  const haandleAddToCart = (itemToAdd) => {
    const shareStatusToCart = deliveryAndShareStatus.shareStatus;
    const deliveryDestinationToCart = deliveryAndShareStatus.deliveryLocation;
    let {
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
    } = itemToAdd;

    if (shareStatusToCart === "shareSet") {
      priceSet = priceSet;
    } else if (shareStatusToCart === "shareOnly") {
      priceSet = priceJustSharee;
    } else {
      priceSet = priceSet;
    }

    const productAddToCart = {
      _id,
      handCodedId,
      name,
      img,
      typeOfProduct,
      priceSet,
      brand,
      category,
      deliveryInDhaka,
      deliveryOutDhaka,
      shareStatusToCart,
      deliveryDestinationToCart,
      quantity: productQuantity,
    };

    if (!shareStatusToCart && !deliveryDestinationToCart) {
      setDeliveryAndShareStatusError({
        shareStatusError: "Sharee Check Mark Is required",
        deliveryLocationError: "Delivery Point Is required",
      });
    } else if (!shareStatusToCart) {
      setDeliveryAndShareStatusError({
        ...deliveryAndShareStatusError,
        shareStatusError: "Sharee Check Mark Is required",
      });
    } else if (!deliveryDestinationToCart) {
      setDeliveryAndShareStatusError({
        ...deliveryAndShareStatusError,
        deliveryLocationError: "Delivery Point Is required",
      });
    }
    if (
      (shareStatusToCart && deliveryDestinationToCart) ||
      deliveryDestinationToCart
    ) {
      addToLocalStorage(productAddToCart);
      setCart([...cart, productAddToCart]);
      toast.success('Added in cart');
      setDeliveryAndShareStatusError({
        shareStatusError: "",
        deliveryLocationError: "",
      });
    }
  };

  return (
    <div className="product-details">
      <HelmetComponent pageName={"alinar - product details"} />
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

          {priceJustSharee && (
            <>
              <div className="set-or-single-sharee">
                <span>
                  <input
                    onClick={aboutShareStaus}
                    type="radio"
                    name="priceBox"
                    value="shareSet"
                    id="shareeSet"
                  />
                  <label htmlFor="shareeSet">Sharee with Panjabi</label>
                </span>
                <span>
                  <input
                    onClick={aboutShareStaus}
                    type="radio"
                    name="priceBox"
                    value="shareOnly"
                    id="sharee"
                  />
                  <label htmlFor="sharee">Only Sharee</label>
                </span>
              </div>
              {deliveryAndShareStatusError.shareStatusError && (
                <p className="error-text">
                  {deliveryAndShareStatusError.shareStatusError}
                </p>
              )}
            </>
          )}

          {deliveryOutDhaka && (
            <>
              <div className="set-or-single-sharee">
                <span>
                  <input
                    onClick={deliveryDestination}
                    type="radio"
                    name="deliveryLocation"
                    value="inSideDhaka"
                    id="insideDhaka"
                  />
                  <label htmlFor="insideDhaka">In side Dhaka</label>
                </span>
                <span>
                  <input
                    onClick={deliveryDestination}
                    type="radio"
                    name="deliveryLocation"
                    value="outSideDhaka"
                    id="outsideDhaka"
                  />
                  <label htmlFor="outsideDhaka">Out side Dhaka</label>
                </span>
              </div>
              {deliveryAndShareStatusError.deliveryLocationError && (
                <p className="error-text">
                  {deliveryAndShareStatusError.deliveryLocationError}
                </p>
              )}
            </>
          )}

          <div className="cart-btn">
            <div className="quantity-controler">
              <button className="btn" onClick={decreaseQuantity}>
                -
              </button>
              <div className="quantity">{productQuantity}</div>
              <button className="btn" onClick={increaseQuantity}>
                +
              </button>
            </div>

            <button onClick={() => haandleAddToCart(data)} className="btn">
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
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
