import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import { addFinalCaltulate } from "../../LocalStorage/ManageLocalStorage";
import "./CartCalculation.css";

const CartCalculation = ({ storedCart }) => {
  const navigate = useNavigate();
  const {
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
    shareStatusToCart,
    deliveryDestinationToCart,
    quantity,
  } = storedCart;
  console.log(storedCart);

  let productQuantity = 0;
  let productPrice = 0;
  let deliveryCharge = 0;

  for (const product of storedCart) {
    productQuantity = productQuantity + product.quantity;
    productPrice = productPrice + product.priceSet * product.quantity;
    deliveryCharge = product.deliveryDestinationToCart;
  }

  if (deliveryCharge === "inSideDhaka") {
    deliveryCharge = 80;
  } else if (deliveryCharge === "outSideDhaka") {
    deliveryCharge = 110;
  } else {
    deliveryCharge = 0;
  }

  const finalCalculating = () => {
    const finalCalculate = {
      productPrice: productPrice,
      deliveryCharge: deliveryCharge,
      totalPrice: parseInt(productPrice + deliveryCharge),
      productQuantity: productQuantity,
    };
    if (finalCalculate) {
      addFinalCaltulate(finalCalculate);
      navigate("/shipping");
    }
  };

  return (
    <div className="cart-calculation">
      <h3>Order Summary</h3>

      <div className="calculate-item">
        <div className="each-info">
          <p>Product Price</p>
          <p>৳ {productPrice}</p>
        </div>

        <div className="each-info">
          <p>Delivery Charge</p>
          <p>৳ {deliveryCharge}</p>
        </div>

        <div className="each-info">
          <h4>Total</h4>
          <h4>৳ {parseInt(productPrice + deliveryCharge)}</h4>
        </div>
      </div>

      <button
        className={
          storedCart.length > 0 ? "place-order-btn" : "place-order-btn-disabled"
        }
        disabled={storedCart.length < 0}
        onClick={finalCalculating}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartCalculation;
