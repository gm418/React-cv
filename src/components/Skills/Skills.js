import React, { Component } from 'react';
import './Skills.css'

class Skills extends Component {

  render() {

    return (
      <section className="hero is-large is-danger">
        <div className="container">
          <div className="notification is-primary">
            <div className="hero-head">
              <h2 className="title">Skills</h2>
            </div>
            <div className="hero-body">
              <div className="columns">

                <div className="column is-half">
                  <h3>Devlopment</h3>
                  <div className="notification is-info">
                    <div className="hexagon">HTML5</div>
                  </div>
                </div>

                <div className="column">
                    <h3>Tools</h3>
                    <ul className="notification is-danger">
                      <li><span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>Git/Github</li>
                      <li><span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>Atom</li>
                      <li><span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>Command line</li>
                      <li><span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>Chrome DevTools</li>
                      <li><span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>Scrum/Kanban</li>
                    </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Skills;
