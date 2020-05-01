import React, { Component } from 'react';
import axios from 'axios';

class Projects extends Component {
constructor(props) {
    super(props);
    this.state = { projects: [] }
}

componentDidMount() {
    axios.get('http://localhost:8000/projects')
    .then(res => {
        this.setState({projects: res.data});
    })
}

filterItems() {
    this.state.projects.tags.filter(item => {

    })
}

render() {
    return (
        <section className="grid">
            {this.state.projects.map((project) => (
                    <div className="card" key={ project.id }>
                        <div className="crop">
                            <img src={ project.img } alt={ project.title }/>
                        </div>
                        <h2>{ project.title }</h2>
                        <p>{ project.builtWith }</p>
                        <p>{ project.body }</p>
                        <a href={project.url}>
                            <button>Visit Site</button>
                        </a>

                    </div>                
                ))}
        </section>
    );
  }
}

export default Projects