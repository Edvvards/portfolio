import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <section className="container flex-down">
        <div className="grid">
          <div>
            <h1 className="title">Hi! I'm a <span className="secondary-color">Marketing Automation specalist</span> who likes to code. Keep scrolling to find out some more about me, head over to <Link to="/projects" className="underline">projects</Link> to see some code or look at the <Link to="/blog" className="underline">blog</Link> for some reading.</h1>
          </div>
          <div className="crop3">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1587121605/main_fxnk8d.png" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
        <div className="grid reverse">
          <div>
            <h2 className="title secondary-color">Automation &amp; Lead Generation</h2>
            <p>Ullamco excepteur incididunt in elit eu esse culpa ex nostrud non dolore esse laborum. Cupidatat dolore sint excepteur eiusmod et consequat labore cillum. Deserunt sit ut dolore qui nisi nisi eu ex dolore esse nostrud Lorem elit amet. Anim sit ex eiusmod ad nostrud consectetur id. Anim officia veniam cupidatat et et consequat.</p>
          </div>
          <div className="crop2">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_email_capture_x8kv_hdotzg.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
        <div className="grid">
          <div>
            <h2 className="title secondary-color">Web Development</h2>
            <p>Ullamco excepteur incididunt in elit eu esse culpa ex nostrud non dolore esse laborum. Cupidatat dolore sint excepteur eiusmod et consequat labore cillum. Deserunt sit ut dolore qui nisi nisi eu ex dolore esse nostrud Lorem elit amet. Anim sit ex eiusmod ad nostrud consectetur id. Anim officia veniam cupidatat et et consequat.</p>
          </div>
          <div className="crop2">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_web_developer_p3e5_qnhpnp.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
        <div className="grid reverse">
          <div>
            <h2 className="title secondary-color">Responsive Email Design</h2>
            <p>Ullamco excepteur incididunt in elit eu esse culpa ex nostrud non dolore esse laborum. Cupidatat dolore sint excepteur eiusmod et consequat labore cillum. Deserunt sit ut dolore qui nisi nisi eu ex dolore esse nostrud Lorem elit amet. Anim sit ex eiusmod ad nostrud consectetur id. Anim officia veniam cupidatat et et consequat.</p>
          </div>
          <div className="crop2">
            <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_opened_gi4n_a1yhua.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
          </div>
        </div>
      
         
      </section>
    );
  }
}

export default Home;