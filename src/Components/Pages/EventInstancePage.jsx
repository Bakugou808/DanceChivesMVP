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
  const [breadcrumb, setBreadcrumb] = useState({})
  const [info, setInfo] = useState({})

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
    setBreadcrumb({style: `${key}`})
    setInfo({})

  }

  //Sets the child next in the breadcrumb and moves the level down
  //Levels = style -> category -> bracket -> battle
  const childSelector = (child) => {

    //Have to skip the brackets/judges extra level
    if(child == "brackets"){
      console.log(selectedData.judges)
      setInfo({judges: selectedData.judges.join(", ")})
      setSelectedData(selectedData[child])
      return;
    }

    setSelectedData(selectedData[child])

    if(selectedLevel == "style"){
      setSelectedLevel("category")
      console.log(selectedData);
      

      setBreadcrumb((prev) => {
        return {style: prev.style, category: child}
      })

    } else if(selectedLevel == "category"){      
      if(child != "brackets"){
        setSelectedLevel("bracket")
        setBreadcrumb((prev) => {
          return {style: prev.style, category: prev.category, bracket: child}
        })
      }
    } else if(selectedLevel == "bracket"){
      setSelectedLevel("battle")
      setBreadcrumb((prev) => {
        return {style: prev.style, category: prev.category, bracket: prev.bracket, battle: child}
      })
    }

  }
  
  const breadcrumbSelector = (level) => {

    if(level == "style"){
      setSelectedLevel("style")
      setSelectedData(eventInstanceData.styles[breadcrumb.style]);

      setBreadcrumb((prev) => {
        return {style: prev.style}
      })

    } else if(level == "category"){
      setSelectedLevel("category")
      setSelectedData(eventInstanceData.styles[breadcrumb.style][breadcrumb.category]);

      setBreadcrumb((prev) => {
        return {style: prev.style, category: prev.category}
      })

    } else if(level == "bracket"){
      setSelectedLevel("bracket")
      setSelectedData(eventInstanceData.styles[breadcrumb.style][breadcrumb.category].brackets[breadcrumb.bracket]);

      setBreadcrumb((prev) => {
        return {style: prev.style, category: prev.category, bracket: prev.bracket}
      })
    }

  }

  const infoSelector = () => {
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
    return (<Viewport selectedData={selectedData} childSelector={childSelector} breadcrumb={breadcrumb} breadcrumbSelector={breadcrumbSelector} info={info}/>)
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
