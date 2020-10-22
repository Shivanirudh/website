import React, { Component } from 'react'
import Particles from "react-particles-js";

export class Background extends Component {
    render() {
        return (
                <Particles className = "particles"
                  params={{
                    background: {
                      color: {
                        value: "#000000",
                      },
                    },
                    fpsLimit: 60,
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 3,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      },
                      number: {
                        density: {
                          enable: true,
                          value_area: 800,
                        },
                        value: 150,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 5,
                      },
                    },
                    retina_detect: true,
                  }}
                />
        )
    }
}

export default Background
