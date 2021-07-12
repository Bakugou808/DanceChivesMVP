import React, { useState, useEffect } from "react";
// * Component Imports
import SearchBar from "./SearchBar";
// * Utils Imports
// import { redirect } from "../../utils/routerTools";
// *react-router imports
import {
  useHistory,
  Link,

  // useLocation,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";

const NavBar = () => {
  /*I'm thinking we can put the logic for checking signin within either 
  an HOC or use a context hook --> i need to read more about the hook though 
  --> just to keep the NavBar component a bit cleaner*/

  let history = useHistory();
  const [toggleStyles, setStylesToggle] = useState(false);
  const [toggleEvents, setEventsToggle] = useState(false);

  const handleRedirect = (path) => {
    history.push(`${path}`);
  };

  const toggleMenu = (category) => {
    category === "styles"
      ? setStylesToggle((prev) => !prev)
      : setEventsToggle((prev) => !prev);
  };

  return (
    <div className="navBar">
      <div className="links">
        <div className={"dropdown is-hoverable"}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
              onClick={() => toggleMenu("styles")}
            >
              <span>Styles</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content">
              <li className="dropdown-item">
                <Link to={"/styles/hip-hop"}>Hip-Hop</Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/styles/breaking"} replace>
                  Breaking
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/styles/popping"} replace>
                  Popping
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/styles/house"} replace>
                  House
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/styles/waacking"} replace>
                  Waacking
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/styles/locking"} replace>
                  Locking
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/styles/vogueing"} replace>
                  Vogue-ing
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className={"dropdown is-hoverable"}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
              onClick={() => toggleMenu("events")}
            >
              <span>Events</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <Link to={"/find_events"}>Find Events</Link>
              </div>
              <div className="dropdown-item">
                <Link to={"/recent_events"}>Recent Events</Link>
              </div>
              <div className="dropdown-item">
                <Link to={"/events/submit"}>Submit Event Info</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
              onClick={() => handleRedirect("/")}
            >
              <span>Home</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
