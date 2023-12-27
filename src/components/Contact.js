import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact_styles.css';

const Contact = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });
  return (
    <div className="page">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <div className="contact-details">
          <animated.div style={animationProps}>
          <div className="contact-item">
            <a href="mailto:shivanirudh2001@gmail.com" target="_blank" rel="noopener noreferrer"><h2><FaEnvelope className="contact-icon" /></h2></a>
          </div>
          </animated.div>
          
          <animated.div style={animationProps}>
          <div className="contact-item">
            <a href="https://github.com/Shivanirudh" target="_blank" rel="noopener noreferrer"><h2><FaGithub className="contact-icon" /></h2></a>
          </div>
          </animated.div>

          <animated.div style={animationProps}>
          <div className="contact-item">
            <a href="https://twitter.com/shivanirudh4" target="_blank" rel="noopener noreferrer"><h2><FaTwitter className="contact-icon" /></h2></a>
          </div>
          </animated.div>

          <animated.div style={animationProps}>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/shivanirudh-s-g/" target="_blank" rel="noopener noreferrer"><h2><FaLinkedin className="contact-icon" /></h2></a>
          </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
