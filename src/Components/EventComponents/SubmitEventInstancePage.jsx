import React, { useState, useEffect } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import firebase from '../../utils/firebase';
import Page404 from '../Pages/404';
import EventInstanceForm from "../Forms/EventInstanceForm";


const SubmitEventInstancePage = (props) => {
  const history = useHistory();
  const [found, setFound] = useState(null);
  let { eventID } = useParams();
  const [eventData, setEventData] = useState(null);

  const getEvent = async (e) => {
    const db = firebase.firestore();

    let doc = await db.collection('events').doc(eventID).get();

    if(doc.exists){

      setEventData(doc.data());
      return true;

    } 
    
    return false;
  }

  useEffect( async() => {
    console.log(eventID);

    if(eventID){
      setFound(await getEvent());
    }

    if(found){
      
    }

  }, [eventID]);

  return (
    <div>
    {found ? 
      <EventInstanceForm /> : <Page404 item="event"/>
    }
    </div>
  );
};

export default SubmitEventInstancePage;
