import React from 'react';
import { Route, Switch } from 'react-router-dom';

// * Component Imports
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import ResultsPage from './Pages/ResultsPage';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import ResetPassword from './Pages/ResetPassword';
import FindEvents from './EventComponents/FindEvents';
import RecentEvents from './EventComponents/RecentEvents';
import EventPage from './Pages/EventPage';
import SubmitEventPage from './EventComponents/SubmitEventPage';
import EventInstancePage from './Pages/EventInstancePage';
import SubmitEventInstancePage from './EventComponents/SubmitEventInstancePage';
import Video from './Pages/Video';
import SubmitVideoPage from './EventComponents/SubmitVideoPage';
import DanceStylesPage from './Pages/DanceStylesPage';

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
                <Route path="/userprofile/:userId">
                    <UserProfile />
                </Route>
                <Route path="/resetpassword">
                    <ResetPassword />
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
                {/* create nested routes for styles dynamic slug */}
                <Route path="/styles/:style">
                    <DanceStylesPage />
                </Route>

                {/* routes for event tab links */}
                <Route path={`/findEvents`}>
                    <FindEvents />
                </Route>
                <Route path={`/recentEvents`}>
                    <RecentEvents />
                </Route>

                {/* eventPage + eventSubmit + submitVideo routes */}
                {/* we have: video component ---  need: video page, functionality for recent feeds, search options (homepage), event instance page, event submit page,   */}
                <Route exact path={`/events/submit`}>
                    <SubmitEventPage />
                </Route>
                <Route exact path={`/events/:eventId/eventInstanceSubmit`}>
                    <SubmitEventInstancePage />
                </Route>
                <Route exact path={`/events/:eventId`}>
                    <EventPage />
                </Route>
                <Route exact path={`/events/:eventId/:eventInstanceId`}>
                    <EventInstancePage />
                </Route>
                <Route
                    exact
                    path={`/events/:eventId/:eventInstanceId/submitVideo`}
                >
                    <SubmitVideoPage />
                </Route>
                <Route
                    path={`/events/:eventId/:eventInstanceId/video/:videoId`}
                >
                    <Video />
                </Route>

                {/* home page */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};

export default RoutesTree;

/* nested styles routes */
