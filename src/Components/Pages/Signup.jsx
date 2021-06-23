import React, { useEffect, useState } from "react";
import SignupForm from "../Forms/SignupForm";
// *react-router imports
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Signup = (props) => {
  // React Router Hooks
  let history = useHistory();
  let location = useLocation();
  let { slug } = useParams();
  let match = useRouteMatch("//:slug");

  return (
    <div className="signup-cont">
      I am a signup page
      <div className="signupFormParent-cont">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
