import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    let heading = 'Lorem Ipsum';
    let subheading = 'Lorem ipsum dolor sit amet';

    return (
          <div id="content" className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1 is-spaced">
                { heading }
              </h1>
              <h2 className="subtitle is-2">
                { subheading }
              </h2>
            </div>
          </div>
    );
  }
}

export default Content;
