import React, { Component } from 'react';
import axios from 'axios';

class Blogs extends Component {
constructor(props) {
    super(props);
    this.state = { blogs: [] }
}
componentDidMount() {
    axios.get('http://localhost:8000/blogs')
    .then(res => {
        this.setState({blogs: res.data});
    })
}
render() {
    return (
        <section>
            <p className="text-center">Filter:</p>
            <div className="flex-across">
                <label class="switch">
                    <input type="checkbox" id="togBtn" />
                    <div class="slider round"></div>
                </label>
            </div>
                <div className="grid">
                    {this.state.blogs.map((blog) => (
                            <div className="card" key={ blog.id }>
                                <div className="crop">
                                    <img src={ blog.img } alt={ blog.title }/>
                                </div>
                                <h2>{ blog.title }</h2>
                                <p>Author - { blog.author }</p>
                                <p>Tag - { blog.tags }</p>
                                <a href="">
                                    <button>Read Blog</button>
                                </a>
                            </div>
                        ))}
                </div>
        </section>
    );
  }
}
export default Blogs;