import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Projects extends Component {
constructor(props) {
    super(props);
    this.state = { projects: null, url: '/projects/' }
}

componentDidMount() {
    axios.get('https://liamedwards-portfolio-cms.herokuapp.com/projects?_sort=createdAt:desc&publish=true')
    .then(res => {
        this.setState({ projects: res.data });
    });
}



render() {
    if(this.state.projects) {
        return (
            <section className="container">
                <div className="title secondary-color m30">
                    Check out some of the projects I have worked on
                </div>
                <div className="grid2">
                    {this.state.projects.map((project) => (
                            <div className="card" key={ project._id }>
                                <div className="crop">
                                    <img src={ project.img } alt={ project.title }/>
                                </div>
                                <h2>{ project.title }</h2>
                                <p className="blog-author">{ project.builtWith }</p>
                                <p>{ project.desc }</p>
                                <Link to={this.state.url+project._id} id={project._id}>
                                    <button>Learn More</button>
                                </Link>
                            </div>                
                        ))}
                </div>
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

export default Projects