import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

class TopOfPage extends Component {
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    render() {
    return (
      <FontAwesomeIcon className="wobble" onClick={() => this.scrollToTop()} icon = { faArrowCircleUp } />
    )
  }
}

export default TopOfPage;