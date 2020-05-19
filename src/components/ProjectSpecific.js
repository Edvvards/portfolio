import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

class ProjectSpecific extends Component {
    constructor(props) {
        super(props);
        this.state = { project: null, id: this.props.match.params.id }
    }
    
    componentDidMount() {
        axios.get(`https://liamedwards-portfolio-cms.herokuapp.com/projects/${this.state.id}`)
        .then(res => {
            this.setState({ project: res.data });
        })
    }


render() {
    if(this.state.project) {
        const parsedContent = marked(this.state.project.content);
        const clean = DOMPurify.sanitize(parsedContent);
        return (
            <section className="flex-down article container">
                <Link to="/projects"><FontAwesomeIcon icon={ faArrowAltCircleLeft } /> Back to all projects</Link>
               <h2 className="title secondary-color m30">{this.state.project.title}</h2>
               <div className="crop">
                    <img src={ this.state.project.img } alt={ this.state.project.title }/>
                </div>
                <p dangerouslySetInnerHTML={{ __html: clean }} />
                <a href={this.state.project.url} target="_blank"  rel="noopener noreferrer">
                    <button>{this.state.project.button}</button>
                </a>
            </section>
        )
    } else {
        return (
            <section>
                <div className="loading-background">
                    <div className="loading"></div>
                    <p className="blog-author">Loading...</p>
                </div>
            </section>
        )
    }
  }
}

export default ProjectSpecific;