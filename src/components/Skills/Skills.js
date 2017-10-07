import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component {

  render() {

    return (
      <section id="skills" className="hero is-medium">
        <div className="hero-body">

          <div className="container">

            <h3 className="title is-3">Compétences</h3>

            <div className="columns">

              <div className="column is-half-desktop is-half-tablet">
                <h4 className="subtitle is-5">Développement</h4>
                <div className="notification hexResponsive">
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

              <div className="column is-half-desktop is-half-tablet">
                <h4 className="subtitle is-5">Outils</h4>
                <ul className="notification">
                  <li>
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>Git/Github
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>Atom
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>Command line
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>Chrome DevTools
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>Scrum/Kanban
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>Electron
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

    );
  }
}

export default Skills;
