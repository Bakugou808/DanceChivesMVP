import React, { useEffect, useState } from "react";
import {
  useHistory,
  Link,

  // useLocation,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
import firebase from "../../../utils/firebase";

const ProfileSigninIcon = (props) => {
  let history = useHistory();

  const { userName } = props;
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        // User is signed in.
        setLoggedInUser(user.displayName);
        console.log("Welcome");
        console.log(loggedInUser);
      } else {
        // No user is signed in.
        setLoggedInUser(null);
        console.log("No user is currently logged in");
      }
    });
  });

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("You are now signed out.");
        history.push("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const Login = () => {
    // history.push('/login');
    history.replace("/login");
  };
  return (
    <div>
      {userName}

      <div id="signedinout">
        {loggedInUser ? (
          <button onClick={signOut}>Logout </button>
        ) : (
          <button onClick={Login}>Sign In</button>
        )}
      </div>
      <div id="username">{loggedInUser ? loggedInUser : <p>Guest</p>}</div>
    </div>
  );
};

export default ProfileSigninIcon;

ProfileSigninIcon.defaultProps = {
  userName: "J",
};
