import React, { Component } from 'react';
import ProPic from "./images/Profile-circle.png";

export class Picture extends Component {
    render() {
        return (
            <div className="picture">
                <img src={ProPic} alt="ProfilePicture" height="300px" width="300px"/>
            </div>
        )
    }
}

export default Picture
