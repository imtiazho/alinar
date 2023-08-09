import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner/Spinner";
import HelmetComponent from "../HelmetComponent/HelmetComponent";

const SignUp = () => {
  const [createUserWithEmailAndPassword, hookUser, hookLoading, hookError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleName = (e) => {
    if (e.target.value !== "") {
      setUserInfo({ ...userInfo, name: e.target.value });
      setErrors({ ...errors, nameError: "" });
    } else {
      setErrors({ ...errors, nameError: "Name is required." });
      setUserInfo({ ...userInfo, name: "" });
    }
  };

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
      setErrors({ ...errors, passwordError: "Password must be 6 character" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPassword = (e) => {
    if (userInfo.password === e.target.value) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmPasswordError: "" });
    } else {
      setErrors({ ...errors, confirmPasswordError: "Password Mismatch" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  if (googleUser) {
    const emailToToken = googleUser.email
    fetch('http://server.alinarbd.com/jwtTokenGenerator', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ emailToToken })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem("accessToken", data.token)
        }
      })
  }

  const handleForm = async (e) => {
    e.preventDefault();
    const emailToToken = userInfo.email
    fetch('http://server.alinarbd.com/jwtTokenGenerator', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ emailToToken })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem("accessToken", data.token)
        }
      })
    if (userInfo.name || userInfo.password || userInfo.confirmPassword || userInfo.email) {
      await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      await updateProfile({ displayName: userInfo.name });
      fetch(`http://server.alinarbd.com/user/${userInfo.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ userName: userInfo.name, userPassWord: userInfo.password, userEmail: userInfo.email, role: 'user' })
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
        })
    } else {
      setErrors({ nameError: "Name is required.", emailError: "Enter a valid Email", passwordError: "Password must be 6 character", confirmPasswordError: "Password Mismatch", imageError: "Image is required." })
    }
  };

  useEffect(() => {
    if (hookUser || googleUser) {
      toast.success("Signup successfully!");
      navigate(from, { replace: true });
    }
  }, [hookUser, googleUser, navigate, from]);

  if (hookLoading || googleLoading || updating) {
    return <Spinner />
  }

  return (
    <div className="form signup-form">
      <HelmetComponent pageName={"alinar - signup"} />
      <div className="form-container">
        <form onSubmit={handleForm}>
          <h3 className="form-title">Sign Up</h3>

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
              <input onBlur={handleEmail} type="email" placeholder="Email" />
            </div>
            {errors.emailError && (
              <p className="error-message">{errors.emailError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
              />
            </div>
            {errors.passwordError && (
              <p className="error-message">{errors.passwordError}</p>
            )}
          </div>

          <div>
            <div className="input-field">
              <input
                onBlur={handleConfirmPassword}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            {errors.confirmPasswordError && (
              <p className="error-message">{errors.confirmPasswordError}</p>
            )}
          </div>

          <div className="input-field">
            <input type="submit" value="SIGNUP" />
          </div>

          <Link to="/login">Already have an account?</Link>
        </form>
        <button onClick={() => signInWithGoogle()} className="btn form-btn">
          <i className="fa-brands fa-google"></i> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
