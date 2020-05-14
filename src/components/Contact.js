import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    render() {
        return (
            <section className="container flex-down">
                <div className="grid">
                    <div>
                        <h2 className="title secondary-color">Let's Talk!</h2>
                        <p>If you have any questions or would like some more information please get in touch:</p>
                        <a href="https://www.linkedin.com/in/liam-edwards/" target="_blank" rel="noopener noreferrer">
                            <p><FontAwesomeIcon icon={ faLinkedin } /> via LinkedIn</p>
                        </a>
                        <a href="mailto:liamedwards2010@gmail.com">
                            <p><FontAwesomeIcon icon={ faEnvelope } /> shoot me an email - liamedwards2010@gmail.com</p>
                        </a>
                    </div>
                    <div className="crop2">
                    <img src="https://res.cloudinary.com/liamcloud/image/upload/v1588770487/undraw_contact_us_15o2_xm3m9g.svg" alt="Liam Edwards Portfolio" title="Liam Edwards Portfolio"/>
                    </div>
                </div>             
            </section>
            );
        }
    }
    
export default Contact;