import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

export class Navigation extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar-links">
          <li className="menu-icon">
            <Link className="sidebar-item" to="#">
              <span className="sidebar-item-link menu-icon-text">Map</span>
              <FontAwesomeIcon className="logo-icon" icon={faAngleDoubleRight} style={{fontSize:"40px"}} rotation={180}/>
            </Link>
          </li>
          <li className="link">
          <Link className="sidebar-item" to="/">
            <FontAwesomeIcon icon={faHome} style={{fontSize:"40px"}}/>
            <span className="sidebar-item-link">Home</span>
          </Link>
          </li>
          <li className="link">
          <Link className="sidebar-item" to="/about">
            <FontAwesomeIcon icon={faUser} style={{fontSize:"40px"}}/>
            <span className="sidebar-item-link">About</span>
          </Link>
          </li>
          <li className="link">
          <Link className="sidebar-item" to="/cv">
            <FontAwesomeIcon icon={faFile} style={{fontSize:"40px"}}/>
            <span className="sidebar-item-link">CV</span>
          </Link>
          </li>
          <li className="link">
          <Link className="sidebar-item" to="/projects">
            <FontAwesomeIcon icon={faArchive} style={{fontSize:"40px", paddingRight:"5px"}}/>
            <span className="sidebar-item-link">Projects</span>
          </Link>
          </li>
          <li className="link">
          <Link className="sidebar-item" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"40px"}}/>
            <span className="sidebar-item-link">Contact Me</span>
          </Link>
          </li>
        </ul>
        
      </div>
    )
  }
}

export default Navigation
