import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ScenarioManager } from "./components/ScenarioManager";
import ScenarioDetails from "./components/UnderConstruction";

function App() {
  return (
    <div className="App-container">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={ScenarioManager} />
            <Route path="/scenarioDetails" component={ScenarioDetails} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
