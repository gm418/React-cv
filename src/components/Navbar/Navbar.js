import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <nav className="navbar">

        <div className="navbar-brand">
          <div className={"navbar-burger "+menuActive} data-target="navMenuExample" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={"navbar-menu " +menuActive} id="navMenuExample">
          <div className="navbar-end">
            <a className="navbar-item" href="">
              Accueil
            </a>
            <a className="navbar-item" href="">
              A propos
            </a>
            <a className="navbar-item" href="">
              Expériences
            </a>
            <a className="navbar-item" href="">
              Portfolio
            </a>
          </div>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;
