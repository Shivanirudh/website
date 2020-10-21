import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  height: 70px;
  width: 200px; 
  padding-left:1rem;
  padding-top: 3rem;
  margin-bottom: 0;
  justify-content:space-around;   
  text-decoration: none;
  a {
    font-size: 2.7em;
    :hover {
      opacity: 0.7; 
    } 
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return (
      <div active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <div className="nav-icon">{this.props.name}</div>
        </Link>
      </div>
    )
  }
}

export class Navigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activePath: "/",
        items: [
          {
            path: '/', name: 'Home', css: 'fas fa-fw fa-home', key: 1 
          },
          { 
            path: '/about', name: 'About', css: 'fas fa-fw fa-user', key: 2
          },
          {
            path: '/cv', name: 'CV', css: 'fas fa-fw fa-file', key: 3
          },
          {
            path: '/project', name: 'Projects', css: 'fas fa-fw fa-archive', key: 4
          },
          {
            path: '/contact', name: 'Contact', css: 'fas fa-fw fa-envelope', key: 5
          }
        ]
      }  
    }
    onItemClick = (path) => {
      this.setState({ activePath: path }); 
    }
    render() {
      const {items, activePath} = this.state
        return (
          <div className="nav">
            <StyledSideNav>
            {
              items.map((item) => {
                return (
                  <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}/>
                )
              })
            }
          </StyledSideNav>
        </div>
        )
    }
}

export default Navigation
