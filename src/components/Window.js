import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export class Window extends Component {
    render() {
        return (
            <div className="window">
                <div className="window-title-bar">
                    <span align="left">Document Viewer</span>
                    <button align="right" className="close-button" onClick={this.closeWindow}><FontAwesomeIcon icon={faTimesCircle}/></button> 
                </div>
            </div>
        )
    }
}

export default Window
