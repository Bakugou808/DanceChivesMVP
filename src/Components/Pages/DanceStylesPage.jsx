import React, { useEffect, useState } from "react";
import DanceStyleInfo from "../DanceStylesComponents/DanceStyleInfo";
import { useParams, Switch, Route } from "react-router-dom";

//parent component --> will handle the logic --> take slug from url --> pull matching data from firestore --> pass the data to the styleInfo component
const DanceStylesPage = (props) => {
  const [styleData, setStyleData] = useState(null);
  let { style } = useParams();

  console.log(style);
  
  useEffect(() => {
    style && grabStyleFromUrl(style);
  }, [style]);

  const grabStyleFromUrl = (style) => {
    // do the firestore stuff save it to a variable (state hook)
    let styleInfo = style;

    setStyleData(styleInfo);
  };

  // let styleInfo = someFunctionToGrabData

  return <div>{styleData && <DanceStyleInfo info={styleData} />}</div>;
};

export default DanceStylesPage;
