import React from "react";
import SQLCode from "../images/SQL_test_code.PNG";
import databaseImage from "../images/test_database_schema.PNG";

export default function SQL() {
  return (
    <div>
      <h1>SQL Part</h1>
      <p>
        Below you can see the schema of an example to connect The users to
        allowed areas and to get their favorite type of games.
      </p>
      <img style={styles.images} src={databaseImage} alt="Code" />
      <h2>SQL CODE TO CREATE THE TABLES</h2>
      <div style={styles.explanation}>
        <p>- After creating the Table with CREATE DATABASE casino;</p>
        <p>- You shall connect to the database using mysql package for node</p>
        <p>- Connect to the database and run the code below.</p>
        <p>
          <strong>
            NOTE: you can select WHERE gt.name = "SLOTS", but to avoid bugs in
            the future I prefered to stick with the index.
          </strong>
        </p>
      </div>
      <img style={styles.images2} src={SQLCode} alt="Code" />
    </div>
  );
}

const styles = {
  images: {
    width: "90%",
    margin: "auto",
    boxShadow: " 0px 6px 22px -8px rgba(82,82,82,0.9)",
  },
  images2: {
    width: "90%",
    margin: "auto",
    maxWidth: "800px",
    boxShadow: " 0px 6px 22px -8px rgba(82,82,82,0.9)",
  },
  explanation: {
    width: "50%",
    textAlign: "left",
    margin: "auto",
    minWidth: "400px",
  },
};
