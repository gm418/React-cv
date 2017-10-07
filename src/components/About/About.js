import React, {Component} from 'react';
import GaelleMorin from './GaelleMorin.jpg';
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
                <p className="subtitle">
                  Jeune développeuse web, j'ai à coeur de produire le code le plus propre et le plus simple possible.
                </p>
                <p>
                  De formation biomédicale, j'ai choisi de suivre une reconversion professionnelle à la <a href="https://wildcodeschool.fr/">Wild Code School</a>.<br></br>
                  Je me suis spécialisée en JavaScript car il est présent côté serveur et côté client et il évolue vite.<br></br>
                  Ce que j'aime dans ce métier, c'est que je suis encouragée à m'autoformer et à partager avec les autres. J'aime cette sensation de construire quelque chose et j'ai plein de domaines à explorer.<br></br>
                  Quand je ne code pas, je suis en train de lire, de cuisiner ou de jouer aux jeux vidéos.<br></br>
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
