import React from 'react';
import Spring from 'react-spring';
import {BrowserRouter as Router, Switch, Route, NavLink, useHistory} from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CVPage from "./components/CVPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

import Footer from "./components/Footer";
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

        <div className="navbar">
          <NavLink to="/" activeClassName="active-option">Home</NavLink>
          <NavLink to="/components/AboutPage" activeClassName="active-option">About</NavLink>
          <NavLink to="/components/CVPage" activeClassName="active-option">CV</NavLink>
          <NavLink to="/components/ProjectPage" activeClassName="active-option">Projects</NavLink>
          <NavLink to="/components/ContactPage" activeClassName="active-option">Contact Me</NavLink>

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
        </div>
      </Router>
      <Footer data={data}/>
    </div>
    

  );
}

export default App;
