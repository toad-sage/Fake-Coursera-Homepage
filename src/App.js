import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavBar';

import Banner from './components/Banner';
import Collaborators from './components/Collaborators';
import Perks from './components/Perks';
import LearnerSection from './components/LearnerSection';
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Banner />
        <Collaborators />
        <Perks />
        <LearnerSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Section8 />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;