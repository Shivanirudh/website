import React, { Component } from 'react';
import ProPic from "./images/Profile.jpg";

export class Picture extends Component {
    render() {
        return (
            <div >
                <img  className="picture" src={ProPic} alt="ProfilePicture" height="300px" width="300px"/>
            </div>
        )
    }
}

export default Picture
