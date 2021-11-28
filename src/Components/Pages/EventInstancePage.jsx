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

const EventInstancePage = (props) => {
  const [eventInstanceData, setEventInstanceData] = useState(null);
  const [found, setFound] = useState(null);
  let { eventId, eventInstanceId } = useParams();
  const history = useHistory();

  const getEventInstance = async (e) => {

    console.log("TRIGGERED");

    const db = firebase.firestore();

    let doc = await db.collection('events').doc(eventId).collection('eventInstance').doc(eventInstanceId).get();

    if(doc.exists){

      setEventInstanceData(doc.data());
      return true;

    }
    
    return false;
  }

  useEffect( async () => {
        
    if(eventInstanceId){
      setFound(await getEventInstance());
    }
    
  }, [eventInstanceId]);
  
  //TODO change workaround to prevent it from rendering while it's null
  return (
    <div>
      Event Instance Page Container
      <br/>
      {found ? 
         (eventInstanceData ? 
          <div> 
            <h2>{eventInstanceData.eventName}</h2>
            <h2>{eventInstanceData.city}</h2>
          </div> : <div>"Loading..."<br/></div>)  :
          <Page404 item="event"/>
      }
    </div> 
  );
};

export default EventInstancePage;
