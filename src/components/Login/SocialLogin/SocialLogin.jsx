import React, { useEffect } from "react";
import google from "../../../img/social/google2.png";
import git from "../../../img/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorMsg;
  if (error || error1) {
    errorMsg = (
      <div>
        <p className="text-danger">
          Error: {error1?.message} {error?.message}
        </p>
      </div>
    );
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <div className="grid grid-cols-1">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className=" px-2 fw-bold fst-italic">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        {errorMsg}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary border w-50"
        >
          <img
            className="mx-2 mx-auto"
            style={{ width: "25px" }}
            src={google}
            alt=""
          />
          Google Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary border w-50 content-center"
        >
          <img
            className="mx-2 flex-auto align-middle mx-auto"
            style={{ width: "25px" }}
            src={git}
            alt=""
          />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
