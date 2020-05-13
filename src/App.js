import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavBar';
import Banner from './components/Banner';
import Collaborators from './components/Collaborators';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Banner />
        <Collaborators />
      </Router>
    </React.Fragment>
  );
}

export default App;
