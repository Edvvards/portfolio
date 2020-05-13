import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Projects extends Component {
constructor(props) {
    super(props);
    this.state = { projects: [], url: '/projects/' }
}

componentDidMount() {
    axios.get('http://localhost:1337/projects')
    .then(res => {
        this.setState({ projects: res.data });
    })
}

render() {
    return (
        <section className="container">
            <div className="title secondary-color">
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
    );
  }
}

export default Projects