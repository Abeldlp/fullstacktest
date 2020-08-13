import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/question1">Question1</Link>
      <Link to="/question2">Question2</Link>
      <Link to="/question3">Question3</Link>
      <Link to="/question4">Question4</Link>
      <Link to="/sqlpart">SQL</Link>
    </div>
  );
}
