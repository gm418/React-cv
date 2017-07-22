import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

        <div className="navbar-brand">
          <div className="navbar-burger" data-target="navMenuExample">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu" id="navMenuExample">
          <div className="navbar-end">
            <a className="navbar-item" href="" target="_blank">
              Accueil
            </a>
            <a className="navbar-item" href="" target="_blank">
              A propos
            </a>
            <a className="navbar-item" href="" target="_blank">
              Expériences
            </a>
            <a className="navbar-item" href="" target="_blank">
              Portfolio
            </a>
          </div>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;
