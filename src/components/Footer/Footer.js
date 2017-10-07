import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="App">
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <a className="icon" href="https://github.com/Daedalus418/">
                                <i className="fa fa-github"></i>
                            </a>
                            <a className="icon" href="https://www.linkedin.com/in/gaelle-morin/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="icon" href="https://twitter.com/daedalus418">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </p>
                        <p>
                            © Gaëlle Morin 2017
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
