import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

export class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="about-text">
                <h1>ABOUT ME:</h1>
                <p>
                  Hey there!
                  <br/>
                  I am currently a junior at SSN College of Engineering. I am interested in the fields of Data Science, Machine Learning and Natural Language Processing.
                  The timeline below shows my experience.  
                </p>
                </div>

                <VerticalTimeline style={{padding:'3rem'}}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#6b605a', color: '#fff' , alignContent: 'left'}}
                  contentArrowStyle={{ borderRight: '7px solid  #e26120' }}
                  date="August 2020 - present"
                  iconStyle={{ background: '#6b605a', color: '#fff' }}
                  icon={<FontAwesomeIcon icon={faBriefcase} style={{fontSize:"50px", marginLeft:"-1.5rem"}}/>}
                >
                  <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
                  <h4 className="vertical-timeline-element-subtitle">Solarillion Foundation</h4>
                  <p>
                    Research in Machine Learning
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2018-present"
                  contentStyle={{ background: '#6b605a', color: '#fff' , alignContent: 'left'}}
                  contentArrowStyle={{ borderRight: '7px solid  #e26120' }}
                  iconStyle={{ background: '#6b605a', color: '#fff' }}
                  icon={<FontAwesomeIcon icon={faGraduationCap} style={{fontSize:"50px", marginLeft:'-1.9rem'}}/>}
                >
                  <h3 className="vertical-timeline-element-title">B.E Computer Science and Engineering</h3>
                  <h4 className="vertical-timeline-element-subtitle">SSN College of Engineering, Chennai</h4>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default AboutPage
