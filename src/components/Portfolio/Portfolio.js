import React, {Component} from 'react';
import './Portfolio.css';


class Portfolio extends Component {

  render() {

    return (
      <section className="section">
        <div className="container">
          <h3 className="title is-3">Portfolio</h3>
          <article className="hero is-success">
            <div className="hero-body">
              <figure className="image is-128x128">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="me"></img>
              </figure>
              <h4 className="subtitle is-5">Lorem</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="tags">
                <span className="tag">One</span>
                <span className="tag">Two</span>
                <span className="tag">Three</span>
              </div>
            </div>
          </article>
          <article className="hero is-danger">
            <div className="hero-body">
              <figure className="image is-128x128">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="me"></img>
              </figure>
              <h4 className="subtitle is-5">Lorem</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="tags">
                <span className="tag">One</span>
                <span className="tag">Two</span>
                <span className="tag">Three</span>
              </div>
            </div>
          </article>
          <article className="hero is-warning">
            <div className="hero-body">
              <figure className="image is-128x128">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="me"></img>
              </figure>
              <h4 className="subtitle is-5">Lorem</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="tags">
                <span className="tag">One</span>
                <span className="tag">Two</span>
                <span className="tag">Three</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Portfolio;
