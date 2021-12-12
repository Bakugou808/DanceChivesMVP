import React, { useState } from "react";
import firebase from '../../utils/firebase';
import { useParams, useHistory } from 'react-router-dom';
import EventInstanceForm_SectionVideos from './EventInstanceForm_SectionVideos'


const EventInstanceForm_SectionBrackets = (props) => {
    const {updateBracketState, catKey} = props
    const [bracketState, setBracketState] = useState({})
    const [showVideoSection, setShowVideoSection] = useState(false)
    const [videoState, updateVideoState] = useState({})

    Style {--> category } {--> bracket} --> video 
            cat1   --->     {brack1
            cat2           brack2}
            cat3     -->   {}    etc
          cat1          brack1      vid1

           -->> category  ---> bracket
                          --> bracket 

                          --> video 
                          ---> video 


    const setBracketState = (payload) => {
        setBracketState(payload)
    }


    const updateVideoState = (payload) => {
        setVideoState(payload)
    }
    
    useEffect(() => {
        if(showVideoSection && !videoState){
            updateBracketState({brackets: bracketState, videoRefId: videoState})
        }
    }, [bracketState])


  return(
    <div className="component-wrapper">
        <div className="loginForm-cont container is-max-desktop">
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        className="input is-small"
                        type="text"
                        placeholder="Bracket Name"
                        value = {title}
                        onChange={(e) => setBracketState(e.target.value)}
                    /> 
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
        </div>
        <div className="video-section-wrapper" >
            {
                showVideoSection && <EventInstanceForm_SectionVideos updateVideoState={updateVideoState}/>
            }
        </div>
    </div>);
};

export default EventInstanceForm_SectionBrackets;
