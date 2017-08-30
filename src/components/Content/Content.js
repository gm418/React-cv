import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    let heading = 'Gaëlle Morin';
    let subheading = 'Développeuse front-end junior, HIRE ME';
    let subheadDisplay = subheading.split(",").map(sub => <p> {sub} </p>)

    return (
          <div id="content" className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1 is-spaced">
                { heading }
              </h1>
              <h2 className="subtitle is-2">
                { subheadDisplay }
              </h2>
            </div>
          </div>
    );
  }
}

export default Content;
