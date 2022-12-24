import React from "react";
import { getStoredCart } from "../../LocalStorage/ManageLocalStorage";
import CartCalculation from "../CartCalculation/CartCalculation";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const storedCart = getStoredCart();

  return (
    <div className="cart">
      <div className="ordered-items">
        {storedCart.map((item) => (
          <CartItem key={item._id} item={item}></CartItem>
        ))}
      </div>

      <div className="cart-calculation">
        <CartCalculation storedCart={storedCart}></CartCalculation>
      </div>
    </div>
  );
};

export default Cart;
