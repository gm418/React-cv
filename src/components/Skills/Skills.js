import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component {

  render() {

    return (
      <section className="hero is-medium is-danger is-bold">
        <div className="container">

          <div className="hero-body">
            <div className="container">
              <h2 className="title">Skills</h2>
              <div className="columns">
                <div className="column">
                  <h3>Devlopment</h3>
                  <div className="columns is-mobile">
                    <div className="column">
                      <div className="notification is-info hexResponsive">
                        <ul className="hexGrid">
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <h4>HTML5</h4>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <h4>CSS3</h4>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <h4>JS</h4>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <h4>AngularJS</h4>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <h4>ReactJS</h4>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <h4>Sass</h4>
                              </span>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h3>Tools</h3>
                  <div className="columns is-mobile">
                    <div className="column">
                      <ul className="notification is-success">
                        <li>
                          <span className="icon">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </span>Git/Github</li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </span>Atom</li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </span>Command line</li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </span>Chrome DevTools</li>
                        <li>
                          <span className="icon">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </span>Scrum/Kanban</li>
                      </ul>
                    </div>
                  </div>
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
