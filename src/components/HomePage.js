import React, { Component } from 'react';
import Picture from "./Picture";
import linkedin from "./images/linkedin.ico";
import github from "./images/github.ico";
import instagram from "./images/instagram.ico";
import Background from "./Background";

export class HomePage extends Component {
    render() {
        const {
            firstName, 
            lastName
        } = this.props.data;
        return (
            <div className="homepage-container">
                <Background/>
                <div className="name-pane" >
                    <h1>{firstName} {lastName}</h1>
                    <p>
                        <a href="https://www.linkedin.com/in/shivanirudh-s-g-b47265199/" target="blank"><img src={linkedin} alt="shivanirudh" height="30" width="30"/></a>
                        &nbsp;&nbsp;
                        <a href="https://github.com/Shivanirudh" target="blank"><img src={github} alt="shivanirudh" height="30" width="30"/></a>
                        &nbsp;&nbsp;
                        <a href="https://instagram.com/shiv_anirudh" target="blank"><img src={instagram} alt="shiv_anirudh" height="30" width="30"/></a>
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
