import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import SlotMachine from "./components/SlotMachine";
import CountryDetails from "./components/Countrydetails";
import SQL from "./components/SQL";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:name" component={CountryDetails} />
          <Route path="/question1" component={Question1} />
          <Route path="/question2" component={Question2} />
          <Route path="/question3" component={Question3} />
          <Route path="/question4" component={SlotMachine} />
          <Route path="/sqlpart" component={SQL} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
