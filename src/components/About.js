import React from 'react';
import profile from '../static/IMG.jpg'
import './about_styles.css'


const About = () => {
  return (
    <div className="page">
      <h1>About Me</h1>
      <div className="about-section">
      <img src={profile} alt="Shivanirudh" className="profile-picture-about" />
          <div className="text-section">
            <p>Hello! I'm Shivanirudh, a passionate and creative programmer based out of Chennai.</p>
            <p>I am currently a student at IIIT Bangalore pursuing my postgraduate education in Computer Science and Engineering. I am interested in the fields of Machine Learning, Data Science and Natural Language Processing.</p>
            <p>My journey in the world of coding began during my studies at SSN College of Engineering. Since then, I have been dedicated to continuous learning, staying updated with the latest technologies and industry trends.</p>
            <p>I've had the privilege of working with amazing teams at Mad Street Den and this has allowed me to contribute to a variety of projects.</p>
            <p>I am proficient in languages such as Python and C++, and tools like PyTorch and OpenCV in addition to software like Git. I'm always excited to take on new challenges that allow me to expand my skill set.</p>
            <p>Outside of coding, you can find me playing basketball, or enjoying a good book</p>
          </div>
        </div>
        <div className="cta-section">
          <p>Feel free to reach out for project collaborations and Open Source contributions. :)</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
    </div>
  );
};

export default About;
