import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  background: black;
  height: 70px;
  width: 200px; 
  justify: left; 
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
    :selection{
      color: "white";
      background: ${(props) => props.active ? "blue" : "black"}
    }  
  }
`;

const NavIcon = styled.div`
  width: 150px;
  align-items:center;
  padding: 10px;  
  font-size: 20px;
  text-decoration: none;
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
          <NavIcon>{this.props.name}</NavIcon>
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
            path: '/about', name: 'About', css: 'fas fa-fw fa-clock', key: 2
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
          <RoutedSideNav className="nav">
            <StyledSideNav>
            {
              items.map((item) => {
                return (
                  <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}/>
                )
              })
            }
          </StyledSideNav>
        </RoutedSideNav>
        )
    }
}
const RoutedSideNav = withRouter(Navigation);
export default Navigation
