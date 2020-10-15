import React, { Component } from 'react';
import Picture from "./Picture";
import linkedin from "./images/linkedin.ico";
import github from "./images/github.ico";
import instagram from "./images/instagram.ico";

export class HomePage extends Component {
    render() {
        const {
            firstName, 
            lastName
        } = this.props.data;
        return (
            <div className="homepage-container">
                <div className="name-pane">
                    <h1>{firstName} {lastName}</h1>
                    <p align="right">
                        <a href="https://www.linkedin.com/in/shiv-anirudh-b47265199/" target="blank"><img src={linkedin} alt="shivanirudh" height="30" width="30"/></a>
                        <a href="https://github.com/Shivanirudh" target="blank"><img align="center" src={github} alt="shivanirudh" height="30" width="30" /></a>
                        <a href="https://instagram.com/shiv_anirudh" target="blank"><img align="center" src={instagram} alt="shiv_anirudh" height="30" width="30" /></a>
                    </p>
                </div>
                <div className="pic-pane">
                    <Picture/>
                </div>
                <div className="interests"></div>
            </div>
        )
    }
}

export default HomePage
