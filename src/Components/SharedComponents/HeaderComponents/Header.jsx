import React from "react";
// * Component Imports
import NavBar from "../NavBarComponents/NavBar";
import ProfileSigninIcon from "./ProfileSigninIcon";
const Header = () => {
  return (
    <div className="header">
      {/* <div className="logo-and-profile-icon"> */}
      <img
        className="logo-img"
        // src="dance-chives-logo.png"
        src="favicon.ico"
        alt="DC letters in blue and green"
      />
      <h3>DANCE CHIVES!</h3>
      <ProfileSigninIcon />
      {/* </div> */}
    </div>
  );
};

export default Header;
