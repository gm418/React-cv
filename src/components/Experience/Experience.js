import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {
  render() {
    let shortResume = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo purus. Etiam ac consectetur eros. Morbi ac leo non est consequat egestas.';

    return (
          <section className="hero is-warning is-large">
            <div className="container has-text-centered">
              <div className="notification is-warning example-title">
                <h3 className="title is-3">Expériences</h3>
                <p>{ shortResume }</p>
              </div>
            </div>


              <div className="container">
                <div className="notification">
                  <div className="columns is-mobile">
                    <div className="column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet">
                      <ul className="timeline timeline-centered">

                        <li className= "timeline-item">
                          <div className="timeline-info">
                            <span>March 12, 2016</span>
                          </div>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <p className="timeline-title">Event Title</p>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                          </div>
                        </li>

                        <li className= "timeline-item">
                          <div className="timeline-info">
                            <span>March 23, 2016</span>
                          </div>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <p className="timeline-title">Event Title</p>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                          </div>
                        </li>

                        <li className= "timeline-item">
                          <div className="timeline-info">
                            <span>April 02, 2016</span>
                          </div>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <p className="timeline-title">Event Title</p>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                          </div>
                        </li>

                        <li className= "timeline-item">
                          <div className="timeline-info">
                            <span>April 28, 2016</span>
                          </div>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <p className="timeline-title">Event Title</p>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                          </div>
                        </li>

                        <li className= "timeline-item">
                          <div className="timeline-info">
                            <span>June 28, 2016</span>
                          </div>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <p className="timeline-title">Event Title</p>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                          </div>
                        </li>

                        <li className= "timeline-item">
                          <div className="timeline-info">
                            <span>July 28, 2016</span>
                          </div>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <p className="timeline-title">Event Title</p>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                              eu pede mollis pretium. Pellentesque ut neque.</p>
                          </div>
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

export default Experience;
