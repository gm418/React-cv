import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    let heading = 'Lorem Ipsum';
    let subheading = 'Lorem ipsum dolor sit amet';

    return (
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                { heading }
              </h1>
              <h2 className="subtitle">
                { subheading }
              </h2>
            </div>
          </div>
    );
  }
}

export default Content;
