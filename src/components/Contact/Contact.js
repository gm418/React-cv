import React, {Component} from 'react';
import { FormErrors } from './FormErrors';
import './Contact.css';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      _replyto: '',
      message: '',
      formErrors: {name: '', _replyto: '', message: ''},
      nameValid: false,
      _replytoValid: false,
      messageValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid
    let _replytoValid = this.state._replytoValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? '' : 'Ce champs ne peut être vide.';
        break;
      case '_replyto':
        _replytoValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors._replyto = _replytoValid ? '' : 'Cet email est invalide.';
        break;
      case 'message':
        messageValid = value.length >= 1;
        fieldValidationErrors.message = messageValid ? '' : 'Ce champs ne peut être vide.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    _replytoValid: _replytoValid,
                    messageValid: messageValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state._replytoValid && this.state.messageValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'is-danger');
  }

  render() {
    let hook = 'Je suis disponible pour du travail à distance ou un CDD/CDI idéalement près de Bourges. Des questions ? Envie de me recruter ? Prenez le temps de m\'écrire un message.'

    return (
      <section id="contact" className="hero is-fullheight is-bold">

        <div className="container">
          <div className="notification has-text-centered">
            <h3 className="title is-3">Contactez-moi !</h3>
            <p>{ hook }</p>
          </div>

          <div className="notification formBorder">
            <form className="columns" action="https://formspree.io/morin.gaelle@gmail.com" method="POST">

              <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <label className="label" htmlFor="name">Nom</label>
                  <div className="control">
                    <input className={`input ${this.errorClass(this.state.formErrors.name)}`}  type="text" name="name" placeholder="" value={this.state.name} onChange={(event) => this.handleUserInput(event)}></input>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">Email</label>
                  <div className="control">
                    <input className={`input ${this.errorClass(this.state.formErrors._replyto)}`}  type="text" name="_replyto" placeholder="" value={this.state._replyto} onChange={(event) => this.handleUserInput(event)}></input>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="subject">Sujet</label>
                  <div className="control">
                    <input className="input" type="text" name="_subject" placeholder=""></input>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="message">Message</label>
                  <div className="control">
                    <textarea className={`textarea ${this.errorClass(this.state.formErrors.message)}`}  name="message" placeholder="" value={this.state.message} onChange={(event) => this.handleUserInput(event)}></textarea>
                  </div>
                </div>

                <FormErrors formErrors={this.state.formErrors} />

                <input type="hidden" name="_language" value="fr" />

                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button className="button" type="submit" name="submit" disabled={!this.state.formValid}>
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
