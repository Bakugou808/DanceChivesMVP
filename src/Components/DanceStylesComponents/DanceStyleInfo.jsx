import React, { useEffect } from "react";

const DanceStyleInfo = ({ info }) => {
  useEffect(() => {
    console.log("in useEffect DSI", info);
  }, [info]);

  const renderInfo = () => {
    return <div>{info}</div>;
  };

  return <div>{info && renderInfo()}</div>;
};

export default DanceStyleInfo;
