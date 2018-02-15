import React, {Component} from 'react';
import GaelleMorin from './images/GaelleMorin.jpg';
import './About.css';

class About extends Component {
  render() {

    return (
      <section id="about" className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <article className="column is-three-quarters">
                <h3 className="title is-3 is-spaced">
                  Moi, c'est Gaëlle
                </h3>
                <p>
                  Après plusieurs années à exercer dans le biomédical, j'ai décidé de me reconvertir dans le développement web.<br></br>
                  J'ai choisi la <a href="https://wildcodeschool.fr/">Wild Code School</a> et sa pédagogie par projets.<br></br>
                  Là, je me suis spécialisée en JavaScript car il est présent côté client et côté serveur et en constante évolution. Parfait pour ma soif d'apprendre !<br></br>
                  Si vous voulez en savoir plus, baladez-vous sur ce portfolio ou visitez ma page <a href="https://www.linkedin.com/in/gaelle-morin/">Linkedin</a>.
                </p>
              </article>
              <div className="column">
                <figure className="image is-256x256">
                  <img src={GaelleMorin} alt="me"></img>
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
