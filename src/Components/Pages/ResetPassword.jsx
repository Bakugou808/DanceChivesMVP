import React, { useEffect, useState } from "react";
import ResetPasswordForm from "../Forms/ResetPasswordForm";
// *react-router imports
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const ResetPassword = (props) => {
  // React Router Hooks
  let history = useHistory();
  let location = useLocation();
  let { slug } = useParams();
  let match = useRouteMatch("//:slug");

  return (
    <div className="ResetPassword-cont">
      I am a reset password page
      <div className="ResetPasswordParent-cont">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
