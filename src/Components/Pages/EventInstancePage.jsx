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
// related components for event instance
import StyleCard from '../EventInstanceComponents/StyleCard'
import Viewport from '../EventInstanceComponents/Viewport'


const EventInstancePage = (props) => {
  const [eventInstanceData, setEventInstanceData] = useState(null);
  const [found, setFound] = useState(null);
  let { eventId, eventInstanceId } = useParams();
  const history = useHistory();
  // state for event instance
  const [selectedData, setSelectedData] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [breadcrumb, setBreadcrumb] = useState({style: '', category: '', bracket: '', battle: ''})

  const getEventInstance = async (e) => {
    const db = firebase.firestore();
    let doc = await db.collection('events').doc(eventId).collection('eventInstance').doc(eventInstanceId).get();

    if(doc.exists){
      setEventInstanceData(doc.data());
      return true;
    }
    return false;
  }

  useEffect( async () => {
        
    if(eventInstanceId){
      setFound(await getEventInstance());
    }
    
  }, [eventInstanceId]);
  

  //Sets the initial style, breadcrumb, and level data
  const styleSelector = (key) => {
    let selectedData = eventInstanceData.styles[key]
    
    setSelectedLevel("style")
    setSelectedData(selectedData)
    setBreadcrumb({style: `${key}`, category: '', bracket: '', battle: ''})
  }

  //Sets the child next in the breadcrumb and moves the level down
  //Levels = style -> category -> bracket -> battle
  const childSelector = (child) => {

    //Have to skip the brackets/judges extra level
    if(child == "brackets"){
      setSelectedData(selectedData[child])
      return;
    }

    if(selectedLevel == "style"){
      setSelectedLevel("category")
      setBreadcrumb((prev) => {
        return {style: prev.style, category: child, bracket: '', battle: ''}
      })

    } else if(selectedLevel == "category"){
      if(child != "brackets"){
        setSelectedLevel("bracket")
        setBreadcrumb((prev) => {
          return {style: prev.style, category: prev.category, bracket: child, battle: ''}
        })
      }
    } else if(selectedLevel == "bracket"){
      setSelectedLevel("battle")
      setBreadcrumb((prev) => {
        return {style: prev.style, category: prev.category, bracket: prev.bracket, battle: child}
      })
    }

    setSelectedData(selectedData[child])
  }
  
  const renderStyles = () => {
    let styles = eventInstanceData.styles 
    
    return Object.entries(styles).map(([key, val]) => {
      return (
        <StyleCard key={key + 1} style={key} styleSelector={styleSelector}/>
      )
    })

  }

  const renderChildren = (params) => {
    let children = Object.keys(selectedData)
    
    return (<Viewport children={children} selectedLevel={selectedLevel} breadcrumb={breadcrumb} childSelector={childSelector}/>)
  }
  
  
  //TODO change workaround to prevent it from rendering while it's null
  return (
    <div>
      Event Instance Page Container
      <br/>
      {found ? 
         (eventInstanceData ? 
          (
          
          <div className="ei-wrapper">
              <section className="section-1">
                <div className="ei-general-info">
                  <h2>{eventInstanceData.eventName}</h2>
                  <h2>{eventInstanceData.city}</h2>
                </div>
              </section> 
              <section className="section-2">
                <div className="root-node-children-container">
                  <div className="list-component" >
                    { renderStyles()}
                  </div>
                </div>
              </section>
              <section className="section-3-viewport" >
                <div className="viewport">
                  {selectedData && renderChildren()}
                </div>
              </section>
          </div>
          
          
          
          
          
          ) 
          
          
          
          
          
          
          : <div>"Loading..."<br/></div>)  :
          <Page404 item="event"/>
      }
    </div> 
  );
};

export default EventInstancePage;
