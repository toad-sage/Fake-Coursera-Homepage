import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavBar';

import Banner from './components/Banner';
import Collaborators from './components/Collaborators';
import Perks from './components/Perks';
import LearnerSection from './components/LearnerSection';
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import SliderSection from './components/SliderSection';
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
        <SliderSection />
        <Section6 />
        <Section7 />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
