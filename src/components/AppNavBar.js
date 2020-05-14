import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { DarkModeToggle } from './index.js';

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      isActive: false
    }
  }

  addActiveClass() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  
  render() {
    const toggleMenu = this.state.isActive
    let menu;
    if(!toggleMenu) {
      menu = 
          <header className="header">
            <p className="logo">Liam Edwards</p>
              <nav>
                <ul>
                  <li><NavLink to="/" exact>Home</NavLink></li>
                  <li><NavLink to="/projects" exact>Projects</NavLink></li>
                  <li><NavLink to="/blog" exact>Blog</NavLink></li>
                  <li><NavLink to="/contact" exact>Contact</NavLink></li>
                  <li><DarkModeToggle /></li>
                  <FontAwesomeIcon icon={faBars} onClick={this.addActiveClass} />
                </ul>
              </nav>
          </header>
    } else {
      menu = 
            <header>
              <p className="logo">Liam Edwards</p>
              <nav className="mobile-nav">
                <FontAwesomeIcon icon={faWindowClose} onClick={this.addActiveClass}/>
                <ul>
                  <li><NavLink to="/" onClick={this.addActiveClass} exact>Home</NavLink></li>
                  <li><NavLink to="/projects" onClick={this.addActiveClass} exact>Projects</NavLink></li>
                  <li><NavLink to="/blog" onClick={this.addActiveClass} exact>Blog</NavLink></li>
                  <li><NavLink to="/contact" onClick={this.addActiveClass} exact>Contact</NavLink></li>
                  <li><DarkModeToggle /></li>
                </ul>
              </nav>
            </header>
    }
    return (
        <div>
            { menu }
        </div>
    );
  }
}

export default AppNavBar;