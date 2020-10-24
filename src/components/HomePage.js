import React, { Component } from 'react';
import TextTransition, { presets } from "react-text-transition";

import ProPic from "./images/Profile.jpg";
import linkedin from "./images/linkedin.ico";
import github from "./images/github.ico";
import instagram from "./images/instagram.ico";
import Footer from "./Footer";

export class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            index:0
        };
    }
    componentDidMount() {
        setInterval(() =>
          {this.setIndex()},
          3000 // every 3 seconds
        );
    }
    setIndex(){
        this.setState({index: this.state.index+1});
    }
    render() {
        const {
            firstName,
            lastName,
            copyright
        } = this.props.data;
        const TEXTS = [
            "Data Science",
            "Machine Learning",
            "Natural Language Processing"
        ];

        return (
            <div>
            <div className="homepage-container">
                <div className="row">
                    <div className="pic-pane">
                        <img  className="picture" src={ProPic} alt="ProfilePicture" height="300px" width="300px"/>
                    </div>
                    <div className="name-pane" >
                        <h1>{firstName} {lastName}</h1>
                        <p> Programmer | Software Developer</p>
                    </div>
                </div>
                <div className="row">
                    <div className="media-icons">
                        <a href="https://www.linkedin.com/in/shivanirudh-s-g-b47265199/" target="blank"><img src={linkedin} alt="shivanirudh" height="40" width="40"/></a>
                        &nbsp;&nbsp;
                        <a href="https://github.com/Shivanirudh" target="blank"><img src={github} alt="shivanirudh" height="40" width="40"/></a>
                        &nbsp;&nbsp;
                        <a href="https://instagram.com/shiv_anirudh" target="blank"><img src={instagram} alt="shiv_anirudh" height="40" width="40"/></a>
                    </div>
                    <div className="interests-pane">
                        <div>
                            <TextTransition
                                text={ TEXTS[this.state.index % TEXTS.length] }
                                springConfig={presets.molasses}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer data={this.props.data}/>
            </div>
        )
    }
}

export default HomePage
