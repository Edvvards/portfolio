import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getFullYear()
    };
  }

  render() {
    return (
      <footer>
        <div>
        <p>
          LRE &copy; {this.state.date}
        </p>
        </div>
        <div>
        <ul>
          <li>
            <a rel="noopener noreferrer" aria-label="Find Out More On Our Linkedin" href="https://www.linkedin.com/in/liam-edwards/" target="_blank">
              <FontAwesomeIcon icon={ faLinkedin } />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" aria-label="Find Out More On My Github" href="https://github.com/Edvvards" target="_blank">
            <FontAwesomeIcon icon={ faGithub } />
            </a>
          </li>
        </ul>
        </div>
      </footer>
    );
  }
}

export default AppFooter;