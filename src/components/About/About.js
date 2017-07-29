import React, { Component } from 'react';

class About extends Component {
  render() {
    let salute = 'Lorem Ipsum';
    let shortResume = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo purus. Etiam ac consectetur eros. Morbi ac leo non est consequat egestas.';
    let resume = 'Cras finibus vehicula lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit nec neque luctus lacinia in dapibus urna. Vivamus a mi arcu. Vivamus et sapien orci. Praesent quam quam, placerat quis ante vel, pellentesque bibendum lorem. Ut ex lorem, ultrices vitae felis semper, bibendum malesuada arcu. Cras ut orci id arcu eleifend fermentum. In hac habitasse platea dictumst.';

    return (
          <section className="hero is-info is-large">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-three-quarters">
                    <h1 className="title">
                      { salute }
                    </h1>
                    <h2 className="subtitle">
                      { shortResume }
                    </h2>
                    <p>
                      { resume }
                    </p>
                  </div>
                    <div className="column">
                      <figure className="image is-256x256">
                        <img src="http://bulma.io/images/placeholders/256x256.png"></img>
                      </figure>
                    </div>
                </div>
              </div>
            </div>
          </section>
    );
  }
}

export default About;
