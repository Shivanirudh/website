import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export class Navigation extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar-links">
          <Link className="sidebar-item" to="/">
            <FontAwesomeIcon icon={faHome} style={{fontSize:"40px", paddingRight:"5px"}}/>Home
          </Link>
          <Link className="sidebar-item" to="/about">
            <FontAwesomeIcon icon={faUser} style={{fontSize:"40px", paddingRight:"5px"}}/>About
          </Link>
          <Link className="sidebar-item" to="/cv">
            <FontAwesomeIcon icon={faFile} style={{fontSize:"40px", paddingRight:"5px"}}/>CV
          </Link>
          <Link className="sidebar-item" to="/projects">
            <FontAwesomeIcon icon={faArchive} style={{fontSize:"40px", paddingRight:"5px"}}/>Projects
          </Link>
          <Link className="sidebar-item" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"40px", paddingRight:"5px"}}/>Contact Me
          </Link>
        </ul>
        
      </div>
    )
  }
}

export default Navigation
