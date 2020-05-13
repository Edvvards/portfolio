import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

class TopOfPage extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { scrolling: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY < 160 && this.state.scrolling === true) {
        this.setState({scrolling: false});
    }
    else if (window.scrollY > 160 && this.state.scrolling !== true) {
        this.setState({scrolling: true});
    }
  }

  scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  render() {
      if(this.state.scrolling) {
        return (
          <FontAwesomeIcon className="wobble" onClick={() => this.scrollToTop()} icon = { faArrowCircleUp } />
        )
      } else {
        return (null)
      }
  }
}

export default TopOfPage;