import React from "react";
import { Route, Switch } from "react-router-dom";

// * Component Imports
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ResultsPage from "./Results/ResultsPage";
import AboutPage from "./About/About";
import ContactPage from "./Contact/Contact";
import BreakingInfo from "./DanceStyles/BreakingInfo";
import HipHopInfo from "./DanceStyles/HipHopInfo";
import HouseInfo from "./DanceStyles/HouseInfo";
import LockingInfo from "./DanceStyles/LockingInfo";
import PoppingInfo from "./DanceStyles/PoppingInfo";
import VogueingInfo from "./DanceStyles/VogueingInfo";
import WaackingInfo from "./DanceStyles/WaackingInfo";
import FindEvents from "./EventComponents/FindEvents";
import RecentEvents from "./EventComponents/RecentEvents";
import SubmitEventInfo from "./EventComponents/SubmitEventInfo";

const RoutesTree = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        {/* do we want a dance styles page at all? kinda seems unecessary since we have the hover dropdown */}
        {/* <Route path="/styles">
          <DanceStyles />
        </Route> */}
        <Route path={`/hip-hop`}>
          <HipHopInfo />
        </Route>
        <Route path={`/breaking`}>
          <BreakingInfo />
        </Route>
        <Route path={`/popping`}>
          <PoppingInfo />
        </Route>
        <Route path={`/house`}>
          <HouseInfo />
        </Route>
        <Route path={`/waacking`}>
          <WaackingInfo />
        </Route>
        <Route path={`/vogueing`}>
          <VogueingInfo />
        </Route>
        <Route path={`/locking`}>
          <LockingInfo />
        </Route>

        {/* event tab links */}
        <Route path={`/find_events`}>
          <FindEvents />
        </Route>
        <Route path={`/recent_events`}>
          <RecentEvents />
        </Route>
        <Route path={`/submit_event_info`}>
          <SubmitEventInfo />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutesTree;

/* nested styles routes */
