import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import firebase from '../../utils/firebase';
import Page404 from './404'

const EventPage = (props) => {
  const [eventData, setEventData] = useState({eventDetails: null, eventInstances: null});
  const [found, setFound] = useState(null);
  let { eventId } = useParams();
  const history = useHistory();

  const submitEventInstance = (e) => {
    e.preventDefault();
    history.push(`${eventId}/eventInstanceSubmit`);
  };

  const getEvent = async (e) => {
    const db = firebase.firestore();

    let eventDetails = await db.collection('events').doc(eventId).get()
    let eventInstancesDetails = await db.collection('events').doc(eventId).collection('eventInstance').get();

    let eventDetailsData = eventDetails.data();
    let instances = []

    if(eventDetails.exists ){
     
      eventInstancesDetails.forEach((instance) => {
        instances.push(instance.data())
      })

      let eventPayload = {eventDetails: eventDetailsData, eventInstances: instances}

      setEventData(eventPayload)

      return true;

    }

    return false;
  }

  useEffect( async () => {
        
    if(eventId){
      setFound(await getEvent());
    }
    console.log('eventdata', eventData)
  }, [eventId]);
  
  const renderEventDetails = () => {
    const {eventDetails} = eventData
    return (
      <div className="EP-text-wrapper">
        <h2>{eventDetails.title}</h2>
        <div className="EP-details-container">
          <h3 className="EP-details-text"> Location: {eventDetails.city} </h3>
          <h3 className="EP-details-text">
            {" "}
            Organizer: {eventDetails.organizer}{" "}
          </h3>
        </div>
      </div>
    );
  };

  // "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",

  const renderInstances = () => {
    const {eventInstances} = eventData
console.log('made it')

    return eventInstances.map((inst) => {
      return (
        <div className="EP-event-instance-card-wrapper" >
          {/* <div className="EP-event-instance-card" style={{  backgroundImage: `url(`${inst.url}`)`}} >  */}
          {/* </div> */}
          <h2 className="EP-EI-title"> {inst.eventName}</h2>
          <h2 className="EP-EI-city"> {inst.city}</h2>
        </div>
      )
    })
  }
  
  //TODO change workaround to prevent it from rendering while it's null
  return (
    <div>
      Event Page Container
      <br />
      {found ? (
        eventData ? (
          <div className="EP-wrapper">
            <span className="EP-details-wrapper">
              {eventData.eventDetails && renderEventDetails()}{" "}
            </span>
            <div className="EP-event-instances-viewport" >
              {eventData && renderInstances()}
            </div>
            <button onClick={submitEventInstance}>add event Instance</button>
          </div>
        ) : (
          <div>
            "Loading..."
            <br />
          </div>
        )
      ) : (
        <Page404 item="event" />
      )}
    </div>
  );
};

export default EventPage;

