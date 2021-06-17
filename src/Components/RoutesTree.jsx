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
import EventPageMain from "../Pages/EventPageMain";
import EventInstanceSubmit from "./EventComponents/EventInstanceSubmit";
import SubmitVideo from "./EventComponents/SubmitVideo";

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
        {/* dance styles routes */}
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

        {/* routes for event tab links */}
        <Route path={`/find_events`}>
          <FindEvents />
        </Route>
        <Route path={`/recent_events`}>
          <RecentEvents />
        </Route>
        <Route path={`/submit_event_info`}>
          <SubmitEventInfo />
        </Route>

        {/* eventPage + eventSubmit + submitVideo routes */}
        <Route path={`/event_page/:event_id`}>
          <EventPageMain />
        </Route>
        <Route path={`/event_page/:event_id/event_instance_submit`}>
          <EventInstanceSubmit />
        </Route>
        <Route path={`/event_page/:event_id/submit_video`}>
          <SubmitVideo />
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
