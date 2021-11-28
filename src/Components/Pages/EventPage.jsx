import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import firebase from '../../utils/firebase';
import Page404 from './404'

const EventPage = (props) => {
  const [eventData, setEventData] = useState(null);
  const [found, setFound] = useState(null);
  let { eventId } = useParams();
  const history = useHistory();

  const submitEventInstance = (e) => {
    e.preventDefault();
    history.push(`${eventId}/eventInstanceSubmit`);
  };

  const getEvent = async (e) => {
    const db = firebase.firestore();

    let doc = await db.collection('events').doc(eventId).get();

    console.log(doc);
    
    if(doc.exists){
 
      setEventData(doc.data());
      return true;

    } 
    
    return false;
  }

  useEffect( async () => {
    
    console.log(eventId);
    
    if(eventId){
      setFound(await getEvent());
    }
    
  }, [eventId]);
  
  //TODO change workaround to prevent it from rendering while it's null
  return (
    <div>
      Event Page Container
      <br/>
      {found ? 
         (eventData ? 
          <div> 
            <h2>{eventData.title}</h2>
            <h2>{eventData.city}</h2>
            <button onClick={submitEventInstance}>add event Instance</button>
          </div> : <div>"Loading..."<br/></div>)  :
          <Page404 item="event"/>
      }
    </div> 
  );
};

export default EventPage;
