import React, {Component} from 'react';
import MamLg from './images/mam-lg.jpg';
import MamMb from './images/mam-mb.jpg';
import MamTb from './images/mam-tb.jpg';
import BijLg from './images/bij-lg.jpg';
import BijWebTb from './images/bijweb-tb.jpg';
import PortfolioLG from './images/portfolio-lg.jpg';
import PortfolioTb from './images/portfolio-tb.jpg';
import PortfolioMb from './images/portfolio-mb.jpg';
import HexaLg from './images/hexa-lg.jpg';
import HexaTb from './images/hexa-tb.jpg';
import OrbitLG from './images/orbit-lg.jpg';
import OrbitTb from './images/orbit-tb.jpg';
import OrbitMb from './images/orbit-mb.jpg';
import './Portfolio.css';

class Portfolio extends Component {

  render() {

    return (
      <section id="portfolio" className="hero">
        <div className="hero-body">

          <div className="container">

            <div className="columns">
              <div className="column is-three-quarters">
                <h3 className="title is-3">Portfolio</h3>
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-three-quarters">
                <article className="container">
                  <figure className="image is-2by1">
                      <img className="img-lg" src={MamLg} alt=""></img>
                      <img className="img-tb" src={MamTb} alt=""></img>
                      <img className="img-mb" src={MamMb} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">MAM Aux Trésors</h4>
                  <p>Création d'un site vitrine et partiellement administrable pour une Maison d'Assistantes Maternelles appelée la MAM Aux Trésors. Elle souhaitaient mettre en évidence l'équipe et présenter brièvement leur établissement et les activités proposées. Elles peuvent éditer les parties "Partenaires" et ... Grâce à ce projet, nous avons mis en application nos connaissances fraîchement acquises sur le framework Materialize.</p>
                  <div className="tags">
                    <span className="tag">MongoDB</span>
                    <span className="tag">Express</span>
                    <span className="tag">AngularJS</span>
                    <span className="tag">NodeJS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Materialize</span>
                  </div>
                </article>
              </div>
              <div className="column is-three-quarters">
                <article className="container">
                  <figure className="image is-2by1">
                      <img className="img-lg" src={BijLg} alt=""></img>
                      <img className="img-tb" src={BijWebTb} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">BIJ et BIJ Web</h4>
                  <p>Sous la houlette de l'Union Nationale de l'Information Jeunesse (UNIJ), le Bureau de l'Information Jeunesse (BIJ) souhaitait une application bureau et web permettant à n'importe quel forma.teur.trice de leur Bureau d'accéder, online et offline, à ses cours. L'intérêt était de transposer leur support de formation dans une application afin qu'elle soit téléchargeable et pouvoir l'utiliser même là où il n'y a pas Internet afin d'éviter le transport de documents physiques pouvant être lourds. Il fallait également une partie admin afin de pouvoir créer/supprimer des comptes utilisateurs.</p>
                  <div className="tags">
                    <span className="tag">Electron</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">Express</span>
                    <span className="tag">AngularJS</span>
                    <span className="tag">NodeJS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Materialize</span>
                  </div>
                </article>
              </div>
              <div className="column is-three-quarters">
                <article className="container">
                  <figure className="image is-2by1">
                      <img className="img-lg" src={PortfolioLG} alt=""></img>
                      <img className="img-tb" src={PortfolioTb} alt=""></img>
                      <img className="img-mb" src={PortfolioMb} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">Mon portfolio</h4>
                  <p>J'avais envie de m'attaquer à un projet personnel et d'apprendre ReactJS. J'ai surtout appris que React est beaucoup trop puissant pour ce que j'ai voulu coder mais au moins, je suis sur les rails pour apprendre la suite.</p>
                  <div className="tags">
                    <span className="tag">ReactJS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Bulma</span>
                  </div>
                </article>
              </div>
              <div className = "column is-three-quarters" >
                <article className="container">
                  <figure className="image is-2by1">
                    <img className="img-lg" src={HexaLg} alt =""></img>
                    <img className="img-tb" src={HexaTb} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">Rate Me</h4>
                  <p>Cette application permet aux utilisateurs, via un mail envoyé par l'administrateur, de se connecter via leur compte Google.
                    Ils peuvent ensuite créer un évènement et voir les évènements passés et ceux auxquels ils peuvent s' inscrire grâce à un code couleur.
                    Après la fin de l'évènement, les participants peuvent se noter entre eux et ajouter un commentaire. Chaque note est symbolisée par une couleur.</p>
                  <div className="tags">
                    <span className="tag">Ruby on Rails</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Bootstrap</span>
                    <span className="tag">AWS-sdk</span>
                    <span className="tag">Google API</span>
                  </div>
                </article>
              </div>
              <div className = "column is-three-quarters" >
                <article className="container">
                  <figure className="image is-2by1">
                    <img className="img-lg" src={OrbitLG} alt=""></img>
                    <img className="img-tb" src={OrbitTb} alt=""></img>
                    <img className="img-mb" src={OrbitMb} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">Orbit</h4>
                  <p>Cette application permet aux utilisateurs, via un mail envoyé par l'administrateur, de se connecter via leur compte Google.
                    Ils peuvent ensuite créer un évènement et voir les évènements passés et ceux auxquels ils peuvent s' inscrire grâce à un code couleur.
                    Après la fin de l'évènement, les participants peuvent se noter entre eux et ajouter un commentaire. Chaque note est symbolisée par une couleur.</p>
                  <div className="tags">
                    <span className="tag">HTML5</span>
                    <span className="tag">CSS3</span>
                    <span className="tag">Scss</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Startin'blox</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
