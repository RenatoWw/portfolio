import React from 'react';
import './App.css';

import htmlIcon from './assets/html5.png';
import cssIcon from './assets/css3.svg';
import pyIcon from './assets/python.png';
import jsIcon from './assets/javascript.png';
import mongoIcon from './assets/mongodb.png';
import nodeIcon from './assets/nodejs.png';
import reactIcon from './assets/reactjs.png';
import rustIcon from './assets/rust.png';

import instagram from './assets/instagram-icon.png';
import github from './assets/github-icon.png';
import linkedin from './assets/linkedin-icon.png';

function App() {
  return (
    <div className="App">
        <nav id="navbar">
          <div class="container">
              <ul>
                  <li class="nav-item home"><a href="#">Home</a></li>
                  <li class="nav-item skills"><a href="#skills">Skills</a></li>
                  <li class="nav-item about"><a href="#about">About</a></li>
                  <li class="nav-item projects"><a href="#">Projects</a></li>
              </ul>
          </div>
      </nav>
      <section id="greetings">
          <div class="container">
              <div class="text">
                  <h2>Hi, I'm Renato.</h2>
                  <h3>I'm a Fullstack Developer.</h3>
              </div>
          </div>
      </section>
      <section id="about">
          <div class="bgimage">
              <div class="container">
                  <h1>About me</h1>
                  <p>My name is Renato, I have 14 years old, I'm a Linux and open
                  source enthusiast, I love technology, astrophysics and science
                  fiction films and series.</p>
              </div>
          </div>
      </section>
      <section id="skills">
          <div class="bgimage">
              <div class="container">
                  <h1>Skills</h1>
                  <div id="row1">
                      <img src={htmlIcon} alt="" />
                      <img src={cssIcon} alt="" />
                      <img src={pyIcon} alt="" />
                  </div>
                  <div id="row2">
                      <img src={jsIcon} alt="" />
                      <img src={mongoIcon} alt="" />
                      <img src={nodeIcon} alt="" />
                  </div>
                  <div id="row3">
                      <img src={reactIcon} alt="" />
                      <img src={rustIcon} alt="" />
                  </div>
              </div>
          </div>
      </section>
      <section id="projects">
          <div class="bgimage">
              <div class="container">
              </div>
          </div>
      </section>
      <footer id="footer">
          <div class="container">
              <li class="social-media"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/renatoanhaiaflud/"><img src={instagram} alt="" /></a></li>
              <li class="social-media"><a target="_blank" rel="noopener nofererrer" href="https://github.com/RenatoWw"><img src={github} alt="" /></a></li>
              <li class="social-media"><a target="_blank" rel="noopener nofererrer" href="https://www.linkedin.com/in/renato-flud-aba54919b/"><img src={linkedin} alt="" /></a></li>
          </div>
      </footer>
    </div>
  );
}

export default App;
