import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { ScenarioManager } from './components/ScenarioManager';
import ScenarioDetails from './components/UnderConstruction';

function App() {
  return (
    <div className="App-container">
      <Router>
        <Route path="/" exact component={ScenarioManager} />
        <Route path="/scenarioDetails" component={ScenarioDetails} />
      </Router>
    </div>
  );
}

export default App;
