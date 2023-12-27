import React from 'react';
import { FaLink, FaBook, FaPlane, FaHotel, FaBomb, FaList, FaSchool, FaScrewdriver } from 'react-icons/fa';
import './project_styles.css';

const Projects = () => {
  const projects = [
    { id: 1, title: ' Genre Classification', description: 'Exploring Bayesian Uncertainty Modeling for Book Genre Classiﬁcation', link: 'https://github.com/Shivanirudh/GenreClassification'  },
    { id: 2, title: ' Flight Delay Prediction', description: 'Machine Learning model that predicts delays and amount of delay in ﬂights, written in Python.', link: 'https://github.com/Shivanirudh/FlightDelayPrediction' },
    { id: 3, title: ' Yoyo', description: 'A web application for hotel owners and tourists to post and peruse a dynamic directory of hotels, written with React and Node JS.', link: 'https://github.com/Shivanirudh/Yoyo'  },
    { id: 4, title: ' Minesweeper', description: 'Application that creates a simulation of the classic Minesweeper game on a variable grid, written in C.', link: 'https://github.com/Shivanirudh/Minesweeper'  },
    { id: 5, title: ' To Do List', description: 'Web App linked to MySQL database through Flask, written in Python.', link: 'https://github.com/Shivanirudh/ToDoList'  },
    { id: 6, title: ' Library Management System', description: 'Application that simulates the functioning of a library management software in real-time, written in C.', link: 'https://github.com/Shivanirudh'  },
    { id: 7, title: ' Interpreter', description: 'Program that mimics the basic functionality of an interpreter that works on a self written language, written in C++.', link: 'https://github.com/Shivanirudh' },
    // Add more projects as needed
  ];
  return (
    <div className="page">
     <div className="projects-content">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <h3>
              {project.id === 1 && <FaBook/>}{project.id === 2 && <FaPlane/>}
              {project.id === 3 && <FaHotel/>}{project.id === 4 && <FaBomb/>}
              {project.id === 5 && <FaList/>}{project.id === 6 && <FaSchool/>}
              {project.id === 7 && <FaScrewdriver/>}
              {project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}><FaLink/> Link to GitHub repo</a>
              <p>{project.id === 1 && <a href="https://ieeexplore.ieee.org/document/9887417"><FaLink/>Link to paper</a>}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
