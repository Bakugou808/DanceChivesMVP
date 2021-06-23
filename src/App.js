import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// * Component Imports
import RoutesTree from "./Components/RoutesTree";
import Header from "./Components/SharedComponents/HeaderComponents/Header";
import NavBar from "./Components/SharedComponents/NavBarComponents/NavBar";
import Footer from "./Components/SharedComponents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
