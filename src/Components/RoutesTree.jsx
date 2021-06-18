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
import EventPage from "../Pages/EventPage";
import SubmitVideo from "./EventComponents/SubmitVideo";
import SubmitEventPage from "./EventComponents/SubmitEventPage";
import EventInstancePage from "../Pages/EventInstancePage";
import SubmitEventInstancePage from "./EventComponents/SubmitEventInstancePage";
import Video from "../Pages/Video";
import SubmitVideoPage from "./EventComponents/SubmitVideoPage";

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
        {/* !!! change this path on the link to 'events/submit' */}
        {/* <Route path={`/submit_event_info`}>
          <SubmitEventInfo /> 
        </Route> */}

        {/* eventPage + eventSubmit + submitVideo routes */}
        {/* we have: video component ---  need: video page, functionality for recent feeds, search options (homepage), event instance page, event submit page,   */}
        <Route path={`/events/:event_id`}>
          <EventPage />
        </Route>
        <Route exact path={`/events/submit`}>
          <SubmitEventPage />
        </Route>
        <Route exact path={`/events/:event_id/event_instance_submit`}>
          <SubmitEventInstancePage />
        </Route>
        <Route path={`/events/:event_id/:event_instance_id`}>
          <EventInstancePage />
        </Route>
        <Route path={`/events/:event_id/:event_instance_id/submit_video`}>
          <SubmitVideoPage />
        </Route>
        <Route path={`/events/:event_id/:event_instance_id/video/:video_id`}>
          <Video />
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
