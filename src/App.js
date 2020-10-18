import React from 'react';
import Spring from 'react-spring';
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CVPage from "./components/CVPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Background from "./components/Background";


function App() {
  const data = {
    firstName: "SHIVANIRUDH",
    lastName: "S G",
    copyright: "Copyright 2020"
  }
  
  return (
    <div className="container-app">
      <Background/>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path = "/">
            <HomePage data={data}/>
          </Route>
          <Route exact path = "/components/AboutPage">
            <AboutPage/>
          </Route>
          <Route exact path = "/components/CVPage">
            <CVPage/>
          </Route>
          <Route exact path = "/components/ProjectPage">
            <ProjectPage/>
          </Route>
          <Route exact path = "/components/ContactPage">
            <ContactPage/>
          </Route>
        </Switch>
      </Router>
      <Footer data={data}/>
    </div>
    

  );
}

export default App;
