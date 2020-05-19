import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <section className="container flex-down">
        <div className="grid">
          <div>
            <h1 className="title">Hi! I'm a <span className="secondary-color">Marketing Automation specialist</span> who likes to code. Keep scrolling to find out some more about me, head over to <Link to="/projects" className="underline">projects</Link> to see some code or look at the <Link to="/blog" className="underline">blog</Link> for some reading.</h1>
          </div>
          <div className="crop3">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1587121605/main_fxnk8d.png" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
        <div className="grid reverse">
          <div>
            <h2 className="title secondary-color">Automation &amp; Lead Generation</h2>
            <p>I have experience in a number of automation processes including: writing apps to automate API calls, running SQL queries to maintain database health, creating chatbots with Twillio and using Marketing Automation platforms to create customer journeys. I like to help companies increase their lead generation through relevant, real-time messaging using email, nurture journeys, and multi-stage forms.<br />Here's a case study of how <Link to="/projects/5ebd29ecbdb6d31dc0897b73" className="underline">Canon increased their lead gen with Eloqua and Gated Content</Link>.</p>
          </div>
          <div className="crop2">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_email_capture_x8kv_hdotzg.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
        <div className="grid">
          <div>
            <h2 className="title secondary-color">Web Development</h2>
            <p>I love building projects and learning new technologies. I've built projects that utilise: HTML, CSS, JavaScript, Node.JS, React, Sass, AEM  &amp; others. If you like to code, please <a href="https://github.com/Edvvards" className="underline" target="_blank" rel="noopener noreferrer">have a look at my Github</a> to see how this website, and others are built.</p>
          </div>
          <div className="crop2">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_web_developer_p3e5_qnhpnp.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
        <div className="grid reverse">
          <div>
            <h2 className="title secondary-color">Responsive Email Design</h2>
            <p>I've created email templates from scratch and using WYSIWYG/CMS editors for a number of clients. I'm happy to advise on designs, best practices and accessibility as well as test across ESP's in softwares like Litmus.</p>
          </div>
          <div className="crop2">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_opened_gi4n_a1yhua.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>

        <div>
          <div className="flex-down outline">
            <div className="title">
                Whether it's to exchange ideas or see if I can help on a project please feel free to get in touch!
            </div>
            <Link to="contact">
                <button className="lrg-btn">Talk To Me</button>
            </Link>
          </div>
      </div>
      
         
      </section>
    );
  }
}

export default Home;