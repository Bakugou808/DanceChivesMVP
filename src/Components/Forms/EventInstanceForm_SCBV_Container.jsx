import React, { useState } from "react";
import firebase from '../../utils/firebase';
import { useParams, useHistory } from 'react-router-dom';
import EventInstanceForm_SectionStyles from './EventInstanceForm_SectionStyles'
import EventInstanceForm_SectionCategories from './EventInstanceForm_SectionCategories'
import EventInstanceForm_SectionBrackets from './EventInstanceForm_SectionBrackets'
import EventInstanceForm_SectionVideos from './EventInstanceForm_SectionVideos'

const EventInstanceForm_SCBV_Container = (props) => {
    
    const [formState, setFormState] = useState({
        styleState: {},
        categoryState: {},  
        bracketState: {},
        videoState: {}
    })

    const updateForm = (payload) => {
        setFormState(payload)
    }
    

  return(
  <div className="loginForm-cont container is-max-desktop">
      <EventInstanceForm_SectionStyles setStyles={setFormState}/>
      <EventInstanceForm_SectionCategories setCategories={setFormState}/>
      <EventInstanceForm_SectionBrackets setBrackets={setFormState}/>
      <EventInstanceForm_SectionVideos setVideos={setFormState}/>

  </div>);
};

export default EventInstanceForm_SCBV_Container;
