import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../utils/firebase";
import ImageUpload from '../../utils/ImageUpload';

const EventForm = () => {
  const history = useHistory();
  // Declare a new state variable, which we'll call "count"
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');  
  const [organizer, setOrganizer] = useState('');
  
  const CreateEvent = async (evt) => {
    try{
      const db = firebase.firestore();

      if(title && location && organizer){
          let docRef = await db.collection('events')
          .add({
                title, 
                location, 
                organizer, 
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

  return (
    <div className="loginForm-cont container">
      <form className="field">
          <input
            type="text"
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            className="input"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input 
            type="text"
            className="input"
            placeholder="Organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
      </form>

      <div className="field"> 
          <ImageUpload />
      </div>
      <div className="field">
          <p className="control">
              <button className="button is-success" onClick={CreateEvent}>
                  Submit
              </button>
          </p>
      </div>
    </div>
  );
};

export default EventForm;
