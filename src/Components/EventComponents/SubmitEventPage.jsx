import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/firebase';



const SubmitEventPage = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');

  const CreateEvent = async (evt) => {
    try{
      const db = firebase.firestore();

      if(title && city){
          let docRef = await db.collection('events')
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
      // firebase
      //     .auth()
      //     .signInWithEmailAndPassword(email, password)
      //     .then((userCredential) => {
      //         // Signed in
      //         var user = userCredential.user;
      //         // ...

      //         history.push('/');
      //     })
      //     .catch((error) => {
      //         var errorCode = error.code;
      //         var errorMessage = error.message;
      //     });
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
                <p className="control">
                    <button className="button is-success" onClick={CreateEvent}>
                        Submit
                    </button>
                </p>
            </div>
        </div>
  );
};

export default SubmitEventPage;
