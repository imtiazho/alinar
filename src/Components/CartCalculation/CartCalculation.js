import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import "./CartCalculation.css";

const CartCalculation = ({ storedCart }) => {
  const [cart, setCart] = useContext(CartContext);
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
    shareStatus,
    quantity,
  } = storedCart;

  // ei form e kichu checkbox thakbe jate kore delivery charge r share er conditional pricing ta bhalo vab count krte paro!

  let subTotal = 0;
  for (const product of storedCart) {
    subTotal = subTotal + product.priceSet;
  }

  return (
    <div className="cart-calculation">
      <h3>Order Summary</h3>

      <div className="calculate-item">
        <div className="each-info">
          <p>Sub-total:</p>
          <p>৳ {subTotal}</p>
        </div>

        <div className="each-info">
          <p>Delivery Charge:</p>
          <p>৳ {subTotal}</p>
        </div>

        <div className="each-info">
          <h4>Total:</h4>
          <h4>৳ {parseInt(subTotal + subTotal)}</h4>
        </div>
      </div>

      <button
        className={
          storedCart.length > 0 ? "place-order-btn" : "place-order-btn-disabled"
        }
        disabled={storedCart.length < 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartCalculation;
