import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpperNav from "../UpperNav/UpperNav";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../../assets/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
import anonymousUser from "../../../assets/anonymous_user.png";
import { toast } from "react-hot-toast";
import { CartContext } from "../../../App";
import { getStoredCart } from "../../../LocalStorage/ManageLocalStorage";
import Spinner from "../../Spinner/Spinner";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [navStatus, steNavOpen] = useState(false);
  const [userSettingOpen, setuserSettingOpen] = useState(false);
  const navigate = useNavigate();
  const { cartState, shippingInfoState } = useContext(CartContext);
  const [cart, setCart] = cartState;
  const storedCart = getStoredCart();

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/blogs">Blog</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
    toast.success("Sign Out successfully!");
    setuserSettingOpen(false);
  };

  let quantityFromSeasonCart = 0;
  for (const item of cart) {
    quantityFromSeasonCart = quantityFromSeasonCart + item.quantity;
  }

  let quantityFromStoredCart = 0;
  for (const item of storedCart) {
    quantityFromStoredCart = quantityFromStoredCart + item.quantity;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="main-nav">
      <UpperNav />
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="menu-log-cart">
          <ul className="nav-items">{menuItems}</ul>

          <ul className="log-cart">
            <li className="cart-icon">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <span className="cart-length">
                {quantityFromStoredCart || quantityFromSeasonCart}
              </span>
            </li>

            {user ? (
              <li className="user-icon">
                <img onClick={() => setuserSettingOpen(!userSettingOpen)} src={`${user.photoURL ? user.photoURL : anonymousUser}`} alt="" />

                {userSettingOpen && (
                  <div className="user-settings">
                    <p>
                      <Link>
                        {user.displayName ? user.displayName : "Anonymous User"}
                      </Link>
                    </p>
                    <p>Dhaka BanglaDesh</p>
                    <button onClick={handleSignOut} className="signout-btn">
                      Sign Out
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="login-icon">
                <Link to="/login">
                  <i className="fa-sharp fa-solid fa-user"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="responsive-navBar">
          <div onClick={() => steNavOpen(!navStatus)} className="bars">
            {navStatus ? <ImCross /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
