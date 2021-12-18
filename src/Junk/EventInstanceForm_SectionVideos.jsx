// import React, { useState } from "react";
// import firebase from '../../utils/firebase';
// import { useParams, useHistory } from 'react-router-dom';


// const EventInstanceForm_SectionVideos = (props) => {
//     const {updateVideoState} = props
//     const [videoState, setVideoState] = useState("")

//     // const setVideoState = (payload) => {
//     //     setVideoState(payload)
//     // }
    
//     useEffect(() => {
//         updateVideoState(videoState)                
//     }, [videoState])

//   return(
//   <div className="loginForm-cont container is-max-desktop">
//     <div className="field">
//         <p className="control has-icons-left has-icons-right">
//             <input
//                 className="input is-small"
//                 type="text"
//                 placeholder="Link/URL"
//                 value = {title}
//                 onChange={(e) => setVideoState(e.target.value)}
//             /> 
//             <span className="icon is-small is-left">
//                 <i className="fas fa-envelope"></i>
//             </span>
//             <span className="icon is-small is-right">
//                 <i className="fas fa-check"></i>
//             </span>
//         </p>
//     </div>
//   </div>);
// };

// export default EventInstanceForm_SectionVideos;
