import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getStoredCart } from "../../../LocalStorage/ManageLocalStorage";
import CustomLink from "../../CustomLink/CustomLink";
import "./NewArraivals.css";

const NewArraivals = () => {
  const storedCart = getStoredCart();
  return (
    <div className="new-arrivals">
      <h2 className="sention-title">
        {" "}
        <p>Alinar</p> NEW ARRIVAL
      </h2>
      <div className="new-arrivals-container">
        <div className="items-short-nav">
          <CustomLink to="/">SHAREE</CustomLink>
          <CustomLink to="/abaya">Abaya</CustomLink>
          <CustomLink to="/3pis">Three Pis</CustomLink>
        </div>

        <Outlet />

        <button
          className={
            storedCart.length > 0
              ? "place-order-btn"
              : "place-order-btn-disabled"
          }
          disabled
        >
          Checkout Your Items
        </button>
      </div>
    </div>
  );
};

export default NewArraivals;
