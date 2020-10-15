import React, { Component } from 'react'
import S from "./images/S-image.png";
export class Background extends Component {
    render() {
        return (
            <div className="background">
                <img src={S} alt="S"></img>
            </div>
        )
    }
}

export default Background
