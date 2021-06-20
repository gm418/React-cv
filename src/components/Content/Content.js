import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {

    return (
          <div id="content" className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1 is-spaced">
                Gaëlle Morin
              </h1>
              <h2 className="subtitle is-2">
                Développeuse freelance HTML5/CSS3/JavaScript
              </h2>
              <a className="btn" href="#contact">
                Hire me
              </a>
            </div>
          </div>
    );
  }
}

export default Content;
