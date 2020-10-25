import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faKeyCdn} from '@fortawesome/free-solid-svg-icons';

export class ContactPage extends Component {
    render() {
        return (
            <div className="contact-page">
                <h1 className="contact-title">Contact Me</h1>
                <div className="contact-stuff">
                    <div className="mail-box">
                        <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                        <FontAwesomeIcon className="arrow-icon" icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage
