import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
  render() {

    return (
      <section className="hero is-fullheight is-blue is-bold">

        <div className="container">
          <div className="notification is-warning has-text-centered example-title">
            <h1 className="title">Contactez-moi!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo purus. Etiam ac consectetur eros. Morbi ac leo non est consequat egestas.</p>
          </div>

          <div className="notification is-warning">
            <form className="columns" action="https://formspree.io/morin.gaelle@gmail.com" method="POST">

              <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <label className="label" for="name">Nom</label>
                  <div className="control">
                    <input className="input" type="text" name="name" placeholder=""></input>
                  </div>
                </div>

                <div className="field">
                  <label className="label" for="email">Email</label>
                  <div className="control has-icons-right">
                    <input className="input is-danger" type="text" name="_replyto" placeholder=""></input>
                    <span className="icon is-small is-right">
                      <i className="fa fa-warning"></i>
                    </span>
                  </div>
                  <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field">
                  <label className="label" for="subject">Sujet</label>
                  <div className="control has-icons-right">
                    <input className="input is-success" type="text" name="_subject" placeholder=""></input>
                    <span className="icon is-small is-right">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <p className="help is-success">This username is available</p>
                </div>

                <div className="field">
                  <label className="label" for="message">Message</label>
                  <div className="control">
                    <textarea className="textarea" name="message" placeholder=""></textarea>
                  </div>
                </div>

                <input type="hidden" name="_language" value="fr" />

                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button className="button is-primary" type="submit" name="submit">
                      <span className="icon">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      </span>
                      <span>Go!</span>
                    </button>
                  </div>
                </div>

              </div>
            </form>
          </div>

        </div>
      </section>

    );
  }
}

export default Contact;
