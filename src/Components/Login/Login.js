import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const [signInWithEmailAndPassword, hookUser, hookLoading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleEmail = (e) => {
    const emailRegEx = /\S+@\S+\.\S+/;
    const validEmail = emailRegEx.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: "Enter a valid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...errors,
        passwordError: "Password must be in 6 character",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookUser || googleUser) {
      toast.success("Login successfully!");
      navigate(from, { replace: true });
    }
  }, [hookUser, googleUser, navigate, from]);

  useEffect(() => {
    const dbError = hookError || googleError;
    if (dbError?.message.includes("auth/user-not-found")) {
      toast.error("User not Found");
    } else if (dbError?.message.includes("auth/uid-already-exists")) {
      toast.error("Uid already exists");
    } else if (dbError?.message.includes("auth/uid-already-exists")) {
      toast.error("Uid already exists");
    } else if (dbError?.message.includes("auth/email-already-exists")) {
      toast.error("This email already exists");
    } else if (dbError?.message.includes("auth/internal-error")) {
      toast.error("Internal Error Occurred");
    } else if (dbError?.message.includes("auth/invalid-email")) {
      toast.error("Ivalid Email");
    } else if (dbError?.message.includes("auth/invalid-password")) {
      toast.error("Ivalid Password");
    }
  }, [hookError, googleError]);

  if (hookLoading || googleLoading) {
    return <Spinner />
  }

  return (
    <div className="form">
      <div className="form-container">
        <form onSubmit={handleForm}>
          <h3 className="form-title">Login</h3>
          <div>
            <div className="input-field">
              <input onBlur={handleEmail} type="email" placeholder="Email" />
            </div>
            {errors.emailError && (
              <p className="error-message">{errors.emailError}</p>
            )}
          </div>

          <div>
            <div onBlur={handlePassword} className="input-field">
              <input type="password" placeholder="Password" />
            </div>
            {errors.passwordError && (
              <p className="error-message">{errors.passwordError}</p>
            )}
          </div>

          <div className="input-field">
            <input type="submit" value="LOGIN" />
          </div>

          <Link to="/signup">Don't have any account?</Link>
        </form>

        <button onClick={() => signInWithGoogle()} className="btn form-btn">
          <i className="fa-brands fa-google"></i> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
