import React, { Component } from 'react';
import GaelleMorin from './GaelleMorin.jpg';

class About extends Component {
  render() {

    return (
          <section id="about" className="hero is-info is-large">
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
                      De formation biomédicale, j'ai suivi une reconversion professionnelle car mon secteur recrute de moins en moins. J'ai choisi la <a href="https://wildcodeschool.fr/">Wild Code School</a> après avoir participé à un atelier et complété un cours en ligne. Là, je me suis spécialisée en JavaScript car il est présent côté serveur et côté client et il évolue vite. Ce que j'aime dans ce métier, c'est que je suis encouragée à m'autoformer et à partager avec les autres. Par exemple, j'ai créé ce portfolio avec ReactJS, c'est finalement trop puissant pour ce que je fais mais je voulais apprendre. J'aime cette sensation de construire quelque chose, j'ai plein de domaines à explorer. Quand je ne code pas, je suis en train de lire, de cuisiner, d'apprendre le japonais ou de jouer aux jeux vidéos. Si vous voulez en savoir plus, baladez-vous sur ce portfolio ou regardez ma page Linkedin.
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
