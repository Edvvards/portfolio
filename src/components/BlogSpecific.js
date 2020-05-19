import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

class BlogSpecific extends Component {
    constructor(props) {
        super(props);
        this.state = { blog: null, id: this.props.match.params.id }
    }
    
    componentDidMount() {
        axios.get(`https://liamedwards-portfolio-cms.herokuapp.com/blogs/${this.state.id}`)
        .then(res => {
            this.setState({ blog: res.data });
        });
    }

render() {
    if(this.state.blog) {
        const parsedContent = marked(this.state.blog.content);
        const clean = DOMPurify.sanitize(parsedContent);
        const date = new Date(this.state.blog.createdAt).toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric'
          }).replace(/ /g, '-');
        return (
            <section className="flex-down article container">
            <Link to="/blog"><FontAwesomeIcon icon={ faArrowAltCircleLeft } /> Back to all blogs</Link>
            <h2 className="title secondary-color m30">{this.state.blog.title}</h2>
            <div className="crop">
                 <img src={ this.state.blog.img } alt={ this.state.blog.title }/>
             </div>
             <p className="blog-author">{this.state.blog.author}, {date}</p>
             <p dangerouslySetInnerHTML={{ __html: clean }} />
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
        );
    }
  }
}

export default BlogSpecific;