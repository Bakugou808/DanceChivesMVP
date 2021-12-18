// import React, { useEffect, useState } from "react";
// import firebase from '../../utils/firebase';
// import { useParams, useHistory } from 'react-router-dom';
// import EventInstanceForm_SectionBrackets from './EventInstanceForm_SectionBrackets'


// const EventInstanceForm_SectionCategories = (props) => {
//     const {updateCategoriesState} = props
//     const [categoryState, setCatergoryState] = useState({name: ""})
//     const [showBracketSection, setShowBracketSection] = useState(false)
//     const [bracketState, setBracketState] = useState({})
    

//     const setCategoryState = (event) => {
//         // still need to format the payload b4 updating state
//         setCategoryState(payload)
        
//     }
//     const updateBracketState = (payload) => {
//         setBracketState(payload)
//     }

//     useEffect(() => {

//         if(showBracketSection && !bracketState && !categoryState.name){
//             updateCategoriesState({category: categoryState, brackets: {catKey: categoryState.name, ...bracketState}})

//             // --> {category: {}, bracket: {}, videoRefID: ""}
//             // --> {category: ...categoryState, brackets: {videoRefID: ""}}

//         } else if (!categoryState) {
//             updateCategoriesState(categoryState)
//             // --> {category: {}}
//             // --> {category: {}, bracket: {}, videoRefID: ""}
//         }
//     }, [categoryState, bracketState])



//   return(

//     <div className="component-wrapper">
//         <div className="loginForm-cont container is-max-desktop">
//             <div className="field">
//                 <p className="control has-icons-left has-icons-right">
//                     <input
//                         className="input is-small"
//                         type="text"
//                         placeholder="Category Name"
//                         value = {title}
//                         onChange={(e) => setCategoryState(e)}
//                     /> 
//                     <span className="icon is-small is-left">
//                         <i className="fas fa-envelope"></i>
//                     </span>
//                     <span className="icon is-small is-right">
//                         <i className="fas fa-check"></i>
//                     </span>
//                 </p>
//             </div>
//         </div>
//         <div className="bracket-section-wrapper">
//             {
//             (showBracketSection && !categoryState) && <EventInstanceForm_SectionBrackets updateBracketState={updateBracketState}/>
//             }
//         </div>
//     </div>
  
  
//   );
// };

// export default EventInstanceForm_SectionCategories;
