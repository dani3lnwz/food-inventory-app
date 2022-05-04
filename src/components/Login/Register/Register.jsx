import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

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

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast.success("Thank You For Signing Up ❤️");
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="register-form w-50 mx-auto">
      <h2 className="text-center text-2xl font-semibold text-blue-500 mb-3">
        Please Register
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />

        <input type="email" name="email" placeholder="Email Address" required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <input
          className="w-50 mx-auto d-block mb-2 mt-2 btn btn-primary text-blue-500"
          type="submit"
          value="Register"
        />
      </form>
      <div className="w-50 mx-auto">{errorMsg}</div>
      <p className="w-50 mx-auto mr-2 text-purple-700">
        Already have an account?
        <Link
          to="/login"
          className="text-danger text-decoration-none font-semibold ml-2"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <div className="w-50 mx-auto">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
