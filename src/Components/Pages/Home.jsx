import React from "react";
// * Component Imports

const Home = (props) => {
  const renderVideos = () => {
    return <div>I'm a video feed</div>;
  };

  return (
    <div className="home-cont">
      <div className="home-title">
        <p>Dance Chives</p>
        <p>"Dance is the Hidden Language of the Soul"</p>
      </div>
      <div className="home-search"> I will contain a search component</div>
      <div className="video-feed">{renderVideos()}</div>
    </div>
  );
};

export default Home;
