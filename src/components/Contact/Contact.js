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
        fieldValidationErrors.name = nameValid ? '' : 'champs vide';
        break;
      case '_replyto':
        _replytoValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors._replyto = _replytoValid ? '' : ' is invalid';
        break;
      case 'message':
        messageValid = value.length >= 1;
        fieldValidationErrors.message = messageValid ? '' : 'champs vide';
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

  render() {

    return (
      <section className="hero is-fullheight is-blue is-bold">

        <div className="container">
          <div className="notification is-warning has-text-centered example-title">
            <h1 className="title">Contactez-moi!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo purus. Etiam ac consectetur eros. Morbi ac leo non est consequat egestas.</p>
          </div>

          <div className="notification">
            <FormErrors formErrors={this.state.formErrors} />
          </div>

          <div className="notification is-warning">
            <form className="columns" action="https://formspree.io/morin.gaelle@gmail.com" method="POST">

              <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <label className="label" htmlFor="name">Nom</label>
                  <div className="control">
                    <input className="input" type="text" name="name" placeholder="" value={this.state.name} onChange={(event) => this.handleUserInput(event)}></input>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">Email</label>
                  <div className="control has-icons-right">
                    <input className="input is-danger" type="text" name="_replyto" placeholder="" value={this.state._replyto} onChange={(event) => this.handleUserInput(event)}></input>
                    <span className="icon is-small is-right">
                      <i className="fa fa-warning"></i>
                    </span>
                  </div>
                  <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field">
                  <label className="label" htmlFor="subject">Sujet</label>
                  <div className="control has-icons-right">
                    <input className="input is-success" type="text" name="_subject" placeholder=""></input>
                    <span className="icon is-small is-right">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <p className="help is-success">This username is available</p>
                </div>

                <div className="field">
                  <label className="label" htmlFor="message">Message</label>
                  <div className="control">
                    <textarea className="textarea" name="message" placeholder="" value={this.state.message} onChange={(event) => this.handleUserInput(event)}></textarea>
                  </div>
                </div>

                <input type="hidden" name="_language" value="fr" />

                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button className="button is-primary" type="submit" name="submit" disabled={!this.state.formValid}>
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
