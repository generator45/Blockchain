import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="section home">
      <h1>Hello, I'm <span className="highlight">Jayesh</span></h1>
      <p>Welcome to my personal portfolio website!</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>I am a passionate developer interested in web technologies and creating awesome projects.</p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <li>Project 1: <a href="#">Portfolio Website</a></li>
        <li>Project 2: <a href="#">E-commerce App</a></li>
        <li>Project 3: <a href="#">Weather App</a></li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:jayesh@example.com">jayesh@example.com</a></p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Jayesh. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
