import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <section className="hero is-fullheight is-success">
                    <Navbar />
                    <Content />
                </section>
                <About />
                <Skills />
                <Experience />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;
