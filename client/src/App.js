import React from "react";
import "./App.css";
import SlotMachine from "./components/SlotMachine";
import CountryFilter from "./components/CountryFilter";

function App() {
  return (
    <div className="App">
      <CountryFilter />
      <SlotMachine />
    </div>
  );
}

export default App;
