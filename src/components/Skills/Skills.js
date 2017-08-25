import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component {

  render() {

    return (
      <section id="skills" className="hero is-medium is-danger is-bold">
        <div className="container">

          <div className="hero-body">
            <div className="container">
              <h3 className="title is-3">Skills</h3>
              <div className="columns">
                <div className="column">
                  <h4 className="subtitle is-5">Devlopment</h4>
                  <div className="columns is-mobile">
                    <div className="column">
                      <div className="notification is-info hexResponsive">
                        <ul className="hexGrid">
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <p>HTML5</p>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <p>CSS3</p>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <p>JS</p>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <p>AngularJS</p>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <p>ReactJS</p>
                              </span>
                            </div>
                          </li>
                          <li className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <p>Sass</p>
                              </span>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h4 className="subtitle is-5">Tools</h4>
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
