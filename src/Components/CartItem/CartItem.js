import React, { useContext } from "react";
import { CartContext } from "../../App";
import { removeFromLocalStorage } from "../../LocalStorage/ManageLocalStorage";
import "./CartItem.css";

const CartItem = ({ item }) => {
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
  } = item;

  const removeOneFromLocalStorage = (id) => {
    const restProductOfCart = cart.filter((product) => product._id !== id);
    setCart(restProductOfCart);
    removeFromLocalStorage(id);
  };

  return (
    <div className="item">
      <img src={img} alt="" />

      <div className="cart-info">
        <p>{name.length > 12 ? name.slice(0, 12) + "..." : name}</p>
        <h4>$ {priceSet}</h4>
        <p>
          <small>Quantity : {quantity} pis</small>
        </p>
      </div>

      <div className="delete-btn">
        <button onClick={() => removeOneFromLocalStorage(_id)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
