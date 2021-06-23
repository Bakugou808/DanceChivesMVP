import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const EventPage = (props) => {
  const [eventData, setEventData] = useState(null);
  let { eventID } = useParams();
  let { params } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    eventID && grabEventIDFromUrl(eventID);
  }, [eventID]);

  const grabEventIDFromUrl = (eventID) => {
    // do the firestore stuff save it to a variable (state hook)
    let eventInfo = eventID;

    setEventData(eventInfo);
  };

  const submitEventInstance = (e) => {
    e.preventDefault();
    history.push(`${params.event_id}/event_instance_submit`);
  };

  return (
    <div>
      Event Page Container
      <h2>{eventData && eventData} </h2>
      <button onClick={submitEventInstance}>add event Instance</button>
    </div>
  );
};

export default EventPage;
