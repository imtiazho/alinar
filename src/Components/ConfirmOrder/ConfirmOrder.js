import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { CartContext } from "../../App";
import auth from "../../Firebase/Firebase.init";
import {
  deleteShoppingCart,
  getCalculation,
  getStoredCart,
} from "../../LocalStorage/ManageLocalStorage";
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  const { cartState, shippingInfoState } = useContext(CartContext);
  const [shippingInfoToFinal, setShippingInfoToFinal] = shippingInfoState;
  const storedCart = getStoredCart();
  const { productPrice, deliveryCharge, productQuantity, totalPrice } =
    getCalculation();

  let productName = "";
  let productStatus = "";
  let productType = "";
  let productImg = "";
  for (const item of storedCart) {
    productName = productName + ", " + item.name;
    productStatus = productStatus + ", " + item.shareStatusToCart;
    productType = productType + ", " + item.typeOfProduct;
    productImg = productImg + ", " + item.img;
  }

  const handleConfirmOrder = () => {
    const orderData = {
      clientName: shippingInfoToFinal?.name,
      clientEmail: shippingInfoToFinal?.email,
      clientPhone: shippingInfoToFinal?.phone,
      clientDistrict: shippingInfoToFinal?.district,
      clientThana: shippingInfoToFinal?.thana,
      clientVillage: shippingInfoToFinal?.village,
      productName: [productName],
      productImg: [productImg],
      productStatus: productStatus,
      productPrice: productPrice,
      deliveryCharge: deliveryCharge,
      productQuantity: productQuantity,
      totalPrice: totalPrice,
    };

    if (orderData.clientName && orderData.clientEmail && orderData.clientPhone && orderData.clientDistrict && orderData.clientThana && orderData.clientVillage && orderData.productName && orderData.productImg && orderData.productStatus && orderData.productPrice && orderData.deliveryCharge && orderData.productQuantity && orderData.totalPrice) {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.acknowledged === true) {
            deleteShoppingCart();
            toast.success('Order done is done!')
          }
        });
    }
    else {
      toast.error('Check your cart! maybe your cart is empty!')
    }
  };

  return (
    <div className="confirm-order">
      <h2>Overall Preview</h2>
      <div className="order-preview">
        <span className="each-row">
          <h4>Name: {shippingInfoToFinal?.name}</h4>
        </span>

        <span className="each-row">
          <p>Email: {shippingInfoToFinal?.email}</p>
          <p>Phone: {shippingInfoToFinal?.phone}</p>
        </span>

        <span className="each-row">
          <p>District: {shippingInfoToFinal?.district}</p>
          <p>Thana: {shippingInfoToFinal?.thana}</p>
        </span>

        <span className="each-row">
          <p>Village or Area: {shippingInfoToFinal?.village}</p>
          <p>Product Quantity: {productQuantity} pis</p>
        </span>

        <span className="each-row">
          <p>
            Products Name:{" "}
            {storedCart?.map((product) => (
              <>
                <span>{product.name}</span>
                {storedCart.length > 1 && ","} <br />
              </>
            ))}{" "}
          </p>
          <p>
            Type of product:{" "}
            {storedCart?.map((product) => (
              <span>{product.typeOfProduct}</span>
            ))}{" "}
          </p>
        </span>

        <span className="each-row">
          <p>Only Product Price: {productPrice}৳</p>
          <p>Delivery Charge: {deliveryCharge}৳</p>
        </span>

        <span className="each-row">
          <p>Grand Total: {totalPrice}৳</p>
          <p>
            Only Cash on Delivery <span className="red-span">*</span>{" "}
          </p>
        </span>
      </div>

      <button onClick={handleConfirmOrder} className="confirm-order-btn">
        Confirm Order
      </button>
    </div>
  );
};

export default ConfirmOrder;
