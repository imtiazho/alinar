import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import auth from "../../Firebase/Firebase.init";
import { getStoredCart } from "../../LocalStorage/ManageLocalStorage";
import "./ShipingInfo.css";

const ShipingInfo = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const storedCart = getStoredCart();
  const { cartState, shippingInfoState } = useContext(CartContext);
  const [shippingInfoToFinal, setShippingInfoToFinal] = shippingInfoState;

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: user.email,
    district: "",
    thana: "",
    village: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    districtError: "",
    thanaError: "",
    villageError: "",
    phoneError: "",
  });

  const handleName = (e) => {
    if (e.target.value) {
      setShippingInfo({ ...shippingInfo, name: e.target.value });
      setErrors({ ...errors, nameError: "" });
    } else {
      setErrors({
        ...errors,
        nameError: "Name is required",
      });
      setShippingInfo({ ...shippingInfo, name: "" });
    }
  };

  const handleDistrict = (e) => {
    if (e.target.value) {
      setShippingInfo({ ...shippingInfo, district: e.target.value });
      setErrors({ ...errors, districtError: "" });
    } else {
      setErrors({
        ...errors,
        districtError: "District is required",
      });
      setShippingInfo({ ...shippingInfo, district: "" });
    }
  };

  const handleThana = (e) => {
    if (e.target.value) {
      setShippingInfo({ ...shippingInfo, thana: e.target.value });
      setErrors({ ...errors, thanaError: "" });
    } else {
      setErrors({
        ...errors,
        thanaError: "Thana name is required",
      });
      setShippingInfo({ ...shippingInfo, thana: "" });
    }
  };

  const handleVillage = (e) => {
    if (e.target.value) {
      setShippingInfo({ ...shippingInfo, village: e.target.value });
      setErrors({ ...errors, villageError: "" });
    } else {
      setErrors({
        ...errors,
        villageError: "Village name is required",
      });
      setShippingInfo({ ...shippingInfo, village: "" });
    }
  };

  const handlePhoneNumber = (e) => {
    const passwordRegex = /.{11,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setShippingInfo({ ...shippingInfo, phone: e.target.value });
      setErrors({ ...errors, phoneError: "" });
    } else {
      setErrors({
        ...errors,
        phoneError: "Phone Number is required",
      });
      setShippingInfo({ ...shippingInfo, phone: "" });
    }
  };

  const handleShippingForm = (e) => {
    e.preventDefault();
    if (
      !shippingInfo.name &&
      !shippingInfo.email &&
      !shippingInfo.district &&
      !shippingInfo.phone &&
      !shippingInfo.thana &&
      !shippingInfo.village
    ) {
      setErrors({
        nameError: "Name is required",
        emailError: "Enter a valid email",
        districtError: "District is required",
        thanaError: "Thana name is required",
        villageError: "Village name is required",
        phoneError: "Phone Number is required",
      });
      setShippingInfo({
        phone: "",
        name: "",
        district: "",
        thana: "",
        village: "",
        email: "",
      });
    } else {
      const ShipingInfo = {
        name: shippingInfo.name,
        email: shippingInfo.email,
        district: shippingInfo.district,
        phone: shippingInfo.phone,
        thana: shippingInfo.thana,
        village: shippingInfo.village,
      };
      setShippingInfoToFinal(ShipingInfo);
      navigate("/confirmOrder");
      toast.success('Saved Your Infomation')
    }
  };

  return (
    <div className="shipping">
      <div className="form-container">
        <form onSubmit={handleShippingForm}>
          <div>
            <div className="input-field">
              <input onBlur={handleName} type="text" placeholder="Name" />
            </div>
            {errors.nameError && (
              <p className="error-message">{errors.nameError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input readOnly type="email" value={user.email} />
            </div>
            {errors.emailError && (
              <p className="error-message">{errors.emailError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input
                onBlur={handleDistrict}
                type="text"
                placeholder="District"
              />
            </div>
            {errors.districtError && (
              <p className="error-message">{errors.districtError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input onBlur={handleThana} type="text" placeholder="Thana" />
            </div>
            {errors.thanaError && (
              <p className="error-message">{errors.thanaError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input
                onBlur={handleVillage}
                type="text"
                placeholder="Village or Area"
              />
            </div>
            {errors.villageError && (
              <p className="error-message">{errors.villageError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input
                onBlur={handlePhoneNumber}
                type="text"
                placeholder="Phone Number"
              />
            </div>
            {errors.phoneError && (
              <p className="error-message">{errors.phoneError}</p>
            )}
          </div>

          <div className="input-field">
            <input type="submit" value="SAVE & CONTINUE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipingInfo;
