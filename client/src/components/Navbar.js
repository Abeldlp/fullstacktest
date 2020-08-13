import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/" style={styles.link}>
        <p>Home</p>
      </Link>
      <Link to="/question1" style={styles.link}>
        <p>Question1</p>
      </Link>
      <Link to="/question2" style={styles.link}>
        <p>Question2</p>
      </Link>
      <Link to="/question3" style={styles.link}>
        <p>Question3</p>
      </Link>
      <Link to="/question4" style={styles.link}>
        <p>Question4</p>
      </Link>
      <Link to="/sqlpart" style={styles.link}>
        <p>SQL</p>
      </Link>
    </div>
  );
}

const styles = {
  link: {
    textDecoration: "none",
  },
};
