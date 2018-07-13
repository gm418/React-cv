import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
  render() {
    let shortResume = 'J\'ai travaillé 10 ans en tant que technicienne de laboratoire, aussi bien dans les hôpitaux qu\'en laboratoire privé ou dans l\'industrie pharmaceutique. Aujourd\'hui, je souhaite devenir une développeuse web accomplie en réalisant un maximum d\'applications.';

    return (
      <section id="experience" className="hero">

        <div className="container">
          <div className="notification has-text-centered">
            <h3 className="title is-3">Expérience</h3>
            <p>{ shortResume }</p>
          </div>
        </div>

        <div className="container">
          <div className="notification">
            <div className="columns is-mobile">
              <div className="column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet">
                <ul className="timeline timeline-centered">

                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>Sept 2006 - août 2016</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <p className="title is-6">Technicienne de laboratoire</p>
                      <p>J'étais principalement chargée de l'entretien, la calibration, les contrôles et la gestion des pannes sur différents automates d'analyse. Des analyses médicales des échantillons et de la validation technique des résultats. J'ai également préparé des chimiothérapies, tenu à jour des dossiers aux essais cliniques ou encore testé la qualité microbiologique de l'eau et de médicaments.</p>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>Sept 2016 - Jan 2017</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <p className="title is-6">Etudiante à la Wild Code School</p>
                      <p>Réalisation de deux projets-clients dans le cadre de ma formation à la Wild Code School. L'un en 6 semaines l'autre en 8 semaines. L'occasion d'appliquer mes connaissances pour le compte d'acteurs locaux.</p>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>Fév 2017 - juil 2017</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <p className="title is-6">Stagiaire chez Filver</p>
                      <p>Stage de 6 mois dans une agence web, j'ai participé au développement d'une application en interne. J'ai surtout mis en pratique mes connaissances en frontend. J'ai aussi animé des ateliers d'initiation au code pour les enfants de 7 à 11 ans.</p>
                    </div>
                  </li>

                  <li className = "timeline-item" >
                    <div className="timeline-info">
                      <span>Fév 2018 - aujourd'hui</span>
                    </div>
                    <div className = "timeline-marker" ></div>
                    <div className = "timeline-content" >
                      <p className="title is-6">Développeuse Rails freelance</p>
                      <p>Chez Hexagonal Consulting, développement d'une application avec une interface admnistrateur et permettant de s'inscrire à des évènements, de noter les participants et de récupérer les notes dans un tableau à double entrées.<br></br>
                      Pour l'application jrnal, participation à la création du tableau de bord des administrateurs, à l'invitation d'utilisateurs et à la gestion des statuts d'un article.</p>
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
