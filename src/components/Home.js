import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <section className="grid">
            <div>
                <h1><span className="yellow">Marketing Automation</span> <span className="red">&#38; Web Development</span></h1>
                <p>Hi! I'm a Marketing Automation specalist who likes to code. I'm interested in lead generation and automating processes, piano, spanish and <a href="/" className="underline">some other stuff</a> </p>
            </div>
            <div className="crop">
              <img src="https://res.cloudinary.com/liamcloud/image/upload/v1587121605/main_fxnk8d.png" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
            </div>
        </section>
    );
  }
}

export default Home;