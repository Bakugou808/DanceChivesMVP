import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/firebase';
import ImageUpload from '../../utils/ImageUpload'



const SubmitEventPage = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [organizer, setOrganizer] = useState('')
  const [eventBanner, setEventBanner] = useState(null)

  const CreateEvent = async (evt) => {
    try{
      const db = firebase.firestore();

      if(title && city && organizer){
          let docRef = await db.collection('events')
          .add({
              title: title,
              organizer: organizer,
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

  return (
    <div className="loginForm-cont container is-max-desktop">

            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        className="input is-small"
                        type="text"
                        placeholder="Event Name"
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
                <p className="control has-icons-left">
                    <input
                        className="input is-small"
                        type="text"
                        placeholder="Organizer"
                        value = {city}
                        onChange={(e) => setOrganizer(e.target.value)}
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
                <ImageUpload />
            <div/>
            <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={CreateEvent}>
                        Submit
                    </button>
                </p>
            </div>
        </div>
    </div>
  );
};

export default SubmitEventPage;
