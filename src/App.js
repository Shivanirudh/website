import React from 'react';
import Spring from 'react-spring';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
          <Link to="/components/HomePage">Home</Link>
          <Link to="/components/AboutPage">About</Link>
          <Link to="/components/CVPage">CV</Link>
          <Link to="/components/ProjectPage">Projects</Link>
          <Link to="/components/ContactPage">Contact Me</Link>

          <Switch>
            <Route exact path = "/components/HomePage">
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
