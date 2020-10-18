import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  background: black;
  height: 70px;
  width: 75px; 
  text-align: center; 
  margin-bottom: 2;
  justify-content:space-around;   
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#393A47"};
    :hover {
      opacity: 0.7;
      text-decoration: none; 
    }  
  }
`;

const NavIcon = styled.div`
  align-self: center;
  padding: 10px;  
`;
class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return (
      <div className="nav-item" active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </div>
    )
  }
}

export class Navigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activePath: '/',
        items: [
          {
            path: '/', name: 'Home', css: 'fa fa-fw fa-home', key: 1 
          },
          { 
            path: '/about', name: 'About', css: 'fa fa-fw fa-clock', key: 2
          },
          {
            path: '/cv', name: 'CV', css: 'fas fa-fw fa-file', key: 3
          },
          {
            path: '/project', name: 'Project', css: 'fas fa-fw fa-box-open', key: 4
          },
          {
            path: '/contact', name: 'Contact Me', css: 'fas fa-fw fa-address-card', key: 5
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
