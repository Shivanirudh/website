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
                        <span className="icon-text"><a href="mailto:shivanirudh2001@gmail.com">shivanirudh2001@gmail.com</a></span>
                        <FontAwesomeIcon className="arrow-icon" icon={faChevronRight}/>
                    </div>
                    <div className="phone-box">
                        <FontAwesomeIcon className="icon" icon={faPhone}/>
                        <span className="icon-text">(+91)9445435407</span>
                        <FontAwesomeIcon className="arrow-icon" icon={faChevronRight}/>
                    </div>
                    <div className="location-box">
                        <FontAwesomeIcon className="icon" icon={faMapMarkedAlt}/>
                        <span className="icon-text"><a href="https://goo.gl/maps/yfM34PP1Ki33DshK8">Chennai, India</a></span>
                        <FontAwesomeIcon className="arrow-icon" icon={faChevronRight}/>
                    </div>
                </div>
                <div className="contact-last">
                    <p>&copy; Copyright 2020</p>
                </div>
            </div>
        )
    }
}

export default ContactPage
