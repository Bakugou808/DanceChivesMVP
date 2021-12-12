import React, { useState } from "react";
import EventInstanceForm_SectionGeneral from './EventInstanceForm_SectionGeneral'
import EventInstanceForm_SectionStyles from './EventInstanceForm_SectionStyles'
import EventInstanceForm_SectionCategories from './EventInstanceForm_SectionCategories'
import EventInstanceForm_SectionBrackets from './EventInstanceForm_SectionBrackets'
import EventInstanceForm_SectionVideos from './EventInstanceForm_SectionVideos'

import firebase from '../../utils/firebase';
import { useParams, useHistory } from 'react-router-dom';

const EventInstanceForm = (props) => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [organizer, setOrganizer] = useState('');

    const [general, setGeneral] = useState({
        title: '',
        city: '',
        date: '',
        organizer: ''
    })

    const [styles, setStyles] = useState({
        style: '',
        dj: '',
        judges: [],
        organizer: ''
    })

    const [categories, setCategories] = useState({
        category_name: ''
    })

    const [brackets, setBrackets] = useState({
        bracket_name: ''
    })

    const [videos, setVideos] = useState({
        link: ''
    })




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
      <EventInstanceForm_SectionGeneral setGeneral={setGeneral}/>
      
  </div>);
};

export default EventInstanceForm;
