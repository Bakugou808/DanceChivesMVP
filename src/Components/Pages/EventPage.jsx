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

  const submitEventInstance = (e) => {
    e.preventDefault();
    history.push(`${eventID}/event_instance_submit`);
  };

  const getEvent = async (e) => {
    const db = firebase.firestore();

    let doc = await db.collection('events').doc(eventID).get();

    if(doc.exists){

      setEventData(doc.data());

    } else{
      throw new Error('Could not get document for ' + eventID);
    }
  }

  useEffect(() => {
    
    if(eventID){
      getEvent()
      .catch((error) => {
        console.log(error);
      });
    }
  

  }, [eventID]);
  
  //TODO change workaround to prevent it from rendering while it's null
  return (
    <div>
      Event Page Container
      <h2>{eventData ? eventData.title : "LOADING..."}</h2>
      <h2>{eventData ? eventData.city : "LOADING..."}</h2>
      <button onClick={submitEventInstance}>add event Instance</button>
    </div>
  );
};

export default EventPage;
