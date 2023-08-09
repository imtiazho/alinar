import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpperNav from "../UpperNav/UpperNav";
import "./NavBar.css";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsFillCartCheckFill } from "react-icons/bs";
import logo from "../../../assets/logo.png";
import auth from "../../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
import anonymousUser from "../../../assets/anonymous_user.png";
import { toast } from "react-hot-toast";
import { CartContext } from "../../../App";
import { getStoredCart } from "../../../LocalStorage/ManageLocalStorage";
import logout from '../../../assets/logout.png';
import arrow from '../../../assets/arrow.png'
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [navStatus, steNavOpen] = useState(false);
  const [userSettingOpen, setuserSettingOpen] = useState(false);
  const navigate = useNavigate();
  const { cartState, shippingInfoState } = useContext(CartContext);
  const [cart, setCart] = cartState;
  const storedCart = getStoredCart();
  const [userData, setUserData] = useState([]);
  const [admin, setAdmin] = useAdmin(user);

  useEffect(() => {
    fetch(`http://server.alinarbd.com/user?userEmail=${user?.email}`).then(res => res.json()).then(data => setUserData(data))
  }, [user?.email])

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
      {admin === true ?
        <li>
          <Link to="/manageProduct">Manage Product</Link>
        </li>
        :
        <li>
          <Link to="/about">About Us</Link>
        </li>
      }
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

  // if (loading || isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div className="main-nav">
      {navStatus && <ul onClick={() => steNavOpen(!navStatus)} className="nav-Open">{menuItems}</ul>}
      <UpperNav />
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <div className="menu-log-cart">
          <ul className="nav-items">{menuItems}</ul>

          <ul className="log-cart">
            <li className="cart-icon">
              <Link to="/cart">
                <BsFillCartCheckFill />
              </Link>
              <span className="cart-length">
                {quantityFromStoredCart || quantityFromSeasonCart}
              </span>
            </li>

            {user ? (
              <li onClick={() => setuserSettingOpen(!userSettingOpen)} className="user-icon">
                <img src={userData ? userData.userImage : anonymousUser} alt="" />

                {userSettingOpen && (
                  <div className="user-settings">
                    <div className="setting-menu-inner">
                      <div className="user-profile">
                        <img src={userData?.userImage || anonymousUser} alt="" />
                        <div>
                          <p>{user.displayName ? user.displayName : 'Anonymous User'}</p>
                          <p><Link onClick={() => setuserSettingOpen(!userSettingOpen)} to='/userprofile'>See your Profile</Link></p>
                        </div>
                      </div>
                      <hr />

                      <button onClick={handleSignOut} className="setting-links">
                        <span>
                          <img src={logout} alt="" />
                          Logout
                        </span>
                        <img className="arrow" src={arrow} alt="" />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li className="login-icon">
                <Link to="/login">
                  <FaUserAlt />
                </Link>
              </li>
            )}
            <div className="responsive-navBar">
              <div onClick={() => steNavOpen(!navStatus)} className="bars">
                {navStatus ? <ImCross /> : <FaBars />}
              </div>
            </div>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
