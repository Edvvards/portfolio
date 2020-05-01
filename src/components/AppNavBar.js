import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
    return (
        <header>
            <h2>Liam Edwards</h2>
            <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><DarkModeToggle /></li>
            <FontAwesomeIcon icon={faBars} onClick={this.addActiveClass} />
            </ul>
            </nav>
        </header>
    );
  }
}

export default AppNavBar;