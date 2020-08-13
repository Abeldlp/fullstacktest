import React from "react";
import "./App.css";
import SlotMachine from "./components/SlotMachine";
import CountryFilter from "./components/CountryFilter";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/question1" component={Question1} />
        <Route path="/question2" component={Question2} />
        <Route path="/question3" component={CountryFilter} />
        <Route path="/question4" component={SlotMachine} />
      </Switch>
    </div>
  );
}

export default App;
