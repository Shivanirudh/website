import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export class Navigation extends Component {
    render() {
        return (
        <nav>
          <NavLink to="/" activeClassName="active-option">Home</NavLink>
          <NavLink to="/components/AboutPage" activeClassName="active-option">About</NavLink>
          <NavLink to="/components/CVPage" activeClassName="active-option">CV</NavLink>
          <NavLink to="/components/ProjectPage" activeClassName="active-option">Projects</NavLink>
          <NavLink to="/components/ContactPage" activeClassName="active-option">Contact Me</NavLink>
        </nav>
        )
    }
}

export default Navigation
