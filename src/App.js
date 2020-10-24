import React from 'react';
import Spring from 'react-spring';
import Particles from "react-particles-js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CVPage from "./components/CVPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  const data = {
    firstName: "SHIVANIRUDH",
    lastName: "S G",
    copyright: "Copyright 2020"
  }

  const particleParams = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#6b605a",
      },
      number: {
        density: {
          enable: true,
          value_area: 1000,
        },
        value: 100,
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        random: false,
        value: 5,
      },
    },
    retina_detect: true,
  }
  
  return (
    <div className="app">
      <Particles className = "particles" params={particleParams} />
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
