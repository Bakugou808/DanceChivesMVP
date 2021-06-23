import React, { useEffect, useState } from "react";
import LoginForm from "../Forms/LoginForm";
// *react-router imports
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Login = (props) => {
  // React Router Hooks
  let history = useHistory();
  let location = useLocation();
  let { slug } = useParams();
  let match = useRouteMatch("//:slug");

  return (
    <div className="Login-cont">
      I am a login page
      <div className="LoginParent-cont">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
