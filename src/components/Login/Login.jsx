import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import "./Login.css";
import Loading from "../Shared/Loading/Loading";
import axios from "axios";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/home";

  let errorMsg;
  if (error) {
    errorMsg = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  // if(loading){
  //   return <Loading></Loading>
  // }

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://khabarchi-server-production.up.railway.app/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    event.target.reset();
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.info("Email Sent 😃");
    } else {
      toast.error("Please Enter Your Email address");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("Yay Congratulations 🎉");
    }
  }, [user]);

  const navigateReg = (event) => {
    navigate("/register");
  };

  return (
    <div className="w-50 mx-auto login-form">
      <h2 className=" text-center mt-2 text-2xl font-serif font-semibold text-green-700 mb-2">
        Welcome To Login
      </h2>
      <Form onSubmit={handleSignIn} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            className="rounded-md"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <input
          className="w-50 mx-auto d-block mb-2 mt-2 btn btn-primary text-blue-500"
          type="submit"
          value="Login"
        ></input>
      </Form>
      <div className="w-50 mx-auto">{errorMsg}</div>
      <div className="w-50 mx-auto">
        <p className="text-purple-700">
          New to Food Inventory?
          <Link
            to="/register"
            className="text-success pe-auto text-decoration-none font-semibold text-base ml-2"
            onClick={navigateReg}
          >
            Please Register
          </Link>
        </p>
        <p className="text-purple-700">
          Forget Password?
          <button
            className="btn btn-link pe-auto text-decoration-none font-semibold"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
