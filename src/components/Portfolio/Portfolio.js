import React, {Component} from 'react';
import Website from './Website.jpg';
import WebsiteTablet from './WebsiteTablet.jpg';
import WebsiteMobile from './WebsiteMobile.jpg';
import MamLg from './mam-lg.jpg';
import MamMb from './mam-mb.jpg';
import MamTb from './mam-tb.jpg';
import BijLg from './bij-lg.jpg';
import BijWebTb from './bijweb-tb.jpg';
import './Portfolio.css';

class Portfolio extends Component {

  render() {

    return (
      <section id="portfolio" className="hero is-primary">
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
                      <img className="img-lg" src={Website} alt=""></img>
                      <img className="img-tb" src={WebsiteTablet} alt=""></img>
                      <img className="img-mb" src={WebsiteMobile} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">Mon portfolio</h4>
                  <p>J'avais envie de m'attaquer à un projet personnel et d'apprendre ReactJS. J'ai surtout appris que React est beaucoup trop puissant pour ce que j'ai voulu coder mais au moins, je suis sur les reails pour apprendre la suite.</p>
                  <div className="tags">
                    <span className="tag">ReactJS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Bulma</span>
                  </div>
                </article>
              </div>
              <div className="column is-three-quarters">
                <article className="container">
                  <figure className="image is-2by1">
                      <img className="img-lg" src={Website} alt=""></img>
                      <img className="img-tb" src={WebsiteTablet} alt=""></img>
                      <img className="img-mb" src={WebsiteMobile} alt=""></img>
                  </figure>
                  <h4 className="subtitle is-5">Lorem</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="tags">
                    <span className="tag">One</span>
                    <span className="tag">Two</span>
                    <span className="tag">Three</span>
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
