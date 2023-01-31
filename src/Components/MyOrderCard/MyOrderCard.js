import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import "./MyOrderCard.css";

const MyOrderCard = ({ eachOrder, handleDeleteOne, handleConfirmOrder }) => {
  const [user, loading, UserError] = useAuthState(auth);
  const [admin, setAdmin] = useAdmin(user);

  const {
    _id,
    clientName,
    clientEmail,
    clientPhone,
    clientDistrict,
    clientThana,
    clientVillage,
    productName,
    productImg,
    productStatus,
    productPrice,
    productType,
    deliveryCharge,
    productQuantity,
    totalPrice,
    orderAccepted,
    orderStatus,
  } = eachOrder;

  return (
    <div className="my-order">
      <div className="order-preview">
        <span className="each-row">
          <h4>Name: {clientName}</h4>
        </span>

        <span className="each-row">
          <p>Phone: {clientPhone}</p>
          <p>Product Quantity: {productQuantity} pis</p>
        </span>

        <span className="img-row">
          {productImg.map((eachProductImage, index) => (
            <img key={index} src={eachProductImage} alt="" />
          ))}
        </span>

        <span className="each-row">
          <p>
            Products Name:{" "}
            {productName?.map((product, index) => (
              <>
                <span key={index}>{product}</span>
                {productName.length > 1 && ", "}
              </>
            ))}{" "}
          </p>
          <p>
            Type of product:{" "}
            {productType?.map((product, index) => (
              <>
                <span key={index}>{product}</span>
                {productType.length > 1 && ", "}
              </>
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

      {/* {orderStatus || <button
        onClick={() => handleDeleteOne(_id)}
        className="confirm-order-btn"
      >
        Cancel Order
      </button>} */}
      {orderStatus ?
        <p className="confirm-text">✓ This order is accepted by Authority</p> :
        <button
          onClick={() => handleDeleteOne(_id)}
          className="confirm-order-btn"
        >
          Cancel Order
        </button>}

      {admin && <div className="button-grp">
        {orderStatus || <button
          onClick={() => handleConfirmOrder(_id)}
          className="confirm-order-btn"
        >
          Accept Order
        </button>}

        <button
          onClick={() => handleDeleteOne(_id)}
          className="confirm-order-btn"
        >
          Delete This Order
        </button>
      </div>}

      <span className="my-order-divider"></span>
    </div>
  );
};

export default MyOrderCard;
