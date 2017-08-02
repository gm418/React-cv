import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
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
                <Experience />
                <Footer />
            </div>
        );
    }
}

export default App;
