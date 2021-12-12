import React, { useState } from "react";
import firebase from '../../utils/firebase';
import { useParams, useHistory } from 'react-router-dom';
import EventInstanceForm_SectionCategories from './EventInstanceForm_SectionCategories'


const EventInstanceForm_SectionStyles = (props) => {
  const [styleState, setStyleState] = useState({})
  const [showCategoriesSection, setShowCategoriesSection] = useState(false)
  const [categoriesState, setCategoriesState] = useState({})
  const [finalState, setFinalState] = useState({})

  const updateCategoriesState = (payload) => {
      setCategoriesState(payload)
  }

  const updateStylesState = (event) => {
    //   setStyleState(payload)
  }
  
  

  return(

  <div className="wrapper" >
    <div className="loginForm-cont container is-max-desktop form-section">
        <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input
                    className="input is-small"
                    type="text"
                    placeholder="Style"
                    value = {date}
                    onChange={(e) => updateStylesState(e)}
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
                    placeholder="DJ" 
                    value = {city}
                    onChange={(e) => updateStylesState(e)}
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
                    placeholder="Judges" 
                    value = {organizer}
                    onChange={(e) => updateStylesState(e)}
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                </span>
            </p>
        </div>
    
    </div>
    <div className="category-section-wrapper">
        {
            showCategoriesSection && <EventInstanceForm_SectionCategories updateCategoriesState={updateCategoriesState}/>
        }
    </div>
  </div>
  );
};

export default EventInstanceForm_SectionStyles;
