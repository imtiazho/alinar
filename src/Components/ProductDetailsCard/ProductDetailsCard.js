import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { addToLocalStorage } from "../../LocalStorage/ManageLocalStorage";
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
  // const [cart, setCart] = useState({});
  const [cart, setCart] = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const [shareStatus, setShareStatus] = useState("");

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const sharee = (e) => {
    setShareStatus(e.target.value);
  };

  const haandleAddToCart = (itemToAdd) => {
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
    } = itemToAdd;

    const productAddToCart = {
      _id,
      handCodedId,
      name,
      img,
      typeOfProduct,
      priceSet,
      priceJustSharee,
      brand,
      category,
      deliveryInDhaka,
      deliveryOutDhaka,
      shareStatus,
      quantity: productQuantity,
    };

    const newcart = [...cart, productAddToCart];
    setCart(newcart);

    addToLocalStorage(productAddToCart);
  };
  console.log(cart);
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

          {priceJustSharee && (
            <div className="set-or-single-sharee">
              <span>
                <input
                  onClick={sharee}
                  type="radio"
                  name="priceBox"
                  value="shareSet"
                  id="shareeSet"
                />
                <label for="shareeSet">Sharee with Panjabi</label>
              </span>
              <span>
                <input
                  onClick={sharee}
                  type="radio"
                  name="priceBox"
                  value="shareOnly"
                  id="sharee"
                />
                <label for="sharee">Only Sharee</label>
              </span>
            </div>
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
            {/* {cart.length > 0 && (
              <p>
                {" "}
                <span className="red-span">*</span>প্রোডাক্টের কোয়ান্টিটি
                বাড়াতে আবার ক্লিক করুন
              </p>
            )} */}
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
