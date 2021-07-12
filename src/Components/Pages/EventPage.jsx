import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import firebase from '../../utils/firebase';

const EventPage = (props) => {
  const [eventData, setEventData] = useState(null);
  let { eventID } = useParams();
  let { params } = useRouteMatch();
  const history = useHistory();

  const grabEventIDFromUrl = (eventID) => {
    // do the firestore stuff save it to a variable (state hook)
    let eventInfo = eventID;

    setEventData(eventInfo);
  };

  const submitEventInstance = (e) => {
    e.preventDefault();
    history.push(`${params.event_id}/event_instance_submit`);
  };

  const getEvent = async (e) => {
    const db = firebase.firestore();

    let doc = await db.collection('events').doc(eventID).get();

    if(doc.exists){
      console.log(doc.data());
    } else{
      throw new Error('Could not get document for ' + eventID);
    }
  }

  useEffect(() => {
    eventID && grabEventIDFromUrl(eventID);
  }, [eventID]);

  getEvent()
  .catch((error) => {
    console.log(error);
  });

  return (
    <div>
      Event Page Container
      <h2>{eventData && eventData} </h2>
      <button onClick={submitEventInstance}>add event Instance</button>
    </div>
  );
};

export default EventPage;
