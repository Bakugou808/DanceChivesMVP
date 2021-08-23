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
import Page404 from '../Pages/404'


const SubmitEventInstancePage = (props) => {
  const history = useHistory();
  const [found, setFound] = useState(null);
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [date, setDate] = useState('');
  let { eventID } = useParams();
  const [eventData, setEventData] = useState(null);

  const CreateEventInstance = async (evt) => {
    try{
      const db = firebase.firestore();

      if(title && city){
          let docRef = await db.collection('event_instance')
          .add({
              title: title,
              city: city
          })

          console.log(
              'Document written with ID: ',
              docRef.id
          );
      }

    } catch(error){
      console.log(error);
    }
  };

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
      (<div className="loginForm-cont container is-max-desktop">
              <div className="field">
                  <p className="control has-icons-left has-icons-right">
                      <input
                          className="input is-small"
                          type="text"
                          placeholder="Date"
                          value = {title}
                          onChange={(e) => setDate(e.target.value)}
                      /> 
                      <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                          <i className="fas fa-check"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control has-icons-left">
                      <input
                          className="input is-small"
                          type="text"
                          placeholder="Event Location" 
                          value = {city}
                          onChange={(e) => setCity(e.target.value)}
                      />
                      <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control has-icons-left">
                      <input
                          className="input is-small"
                          type="text"
                          placeholder="Organization" 
                          value = {organizer}
                          onChange={(e) => setOrganizer(e.target.value)}
                      />
                      <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control">
                      <button className="button is-success" onClick={CreateEventInstance}>
                          Submit
                      </button>
                  </p>
              </div>
          </div>) : 
          <Page404 item="event"/>
    }
    </div>
  );
};

export default SubmitEventInstancePage;
