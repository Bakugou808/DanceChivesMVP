import React, { useState } from "react";
import firebase from '../../utils/firebase';
import { useParams, useHistory } from 'react-router-dom';

const EventInstanceForm = (props) => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [organizer, setOrganizer] = useState('');
  let { eventId } = useParams();

  const CreateEventInstance = async (evt) => {
    try{
      const db = firebase.firestore();

      if(title && city){
          let docRef = await db.collection('events').doc(eventId).collection('eventInstance')
          .add({
              eventName: title,
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

  return(
  <div className="loginForm-cont container is-max-desktop">
    <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input
                className="input is-small"
                type="text"
                placeholder="Title"
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
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
        <p className="control has-icons-left has-icons-right">
            <input
                className="input is-small"
                type="text"
                placeholder="Date"
                value = {date}
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
  </div>);
};

export default EventInstanceForm;
