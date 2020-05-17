import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Blogs extends Component {
constructor(props) {
    super(props);
    this.state = { blogs: null, tags: 'work', url: '/blog/', filteredBlogs: [] }
    this.changeTag = this.changeTag.bind(this);
    this.loadBlogs = this.loadBlogs.bind(this);
}

loadBlogs() {
    axios.get(`http://localhost:1337/blogs?_sort=createdAt:desc&publish=true`)
    .then(res => {
        console.log(res.data)
        this.setState({ blogs: res.data, filteredBlogs: res.data.filter(blog => blog.tags === this.state.tags) });
    });
}


componentDidMount() {
    this.loadBlogs()    
}

changeTag(e) {
    this.setState({tags: e.target.value, filteredBlogs: this.state.blogs.filter(blog => blog.tags === e.target.value) }, this.loadBlogs);
}

render() {
    if(this.state.blogs) {
    return (
        <section>
            <div className="m30">
                <p className="text-center">Filter:</p>
                <div className="flex-across mb10">
                    <div>
                        <input type="radio" name="tag" value="fun" onChange={this.changeTag} id="fun" className="tag" />
                        <label for="fun" >
                            Fun
                        </label>
                        <input type="radio" name="tag" value="work" onChange={this.changeTag} id="work" className="tag" defaultChecked />
                        <label for="work">
                            Work
                        </label>
                    </div>
                </div>
            </div>
                <div className="grid2">
                    {this.state.filteredBlogs.map((blog) => (
                            <div className="card" key={ blog._id }>
                                <div className="crop">
                                    <img src={ blog.img } alt={ blog.title }/>
                                </div>
                                <h2>{ blog.title }</h2>
                                <p className="blog-author">{ blog.author }</p>
                                <Link to={this.state.url+blog._id} id={blog._id}>
                                    <button>Read Blog</button>
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

export default Blogs;