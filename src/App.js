import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <section className="hero is-fullheight is-primary">
                    <Navbar />
                    <Content />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;
