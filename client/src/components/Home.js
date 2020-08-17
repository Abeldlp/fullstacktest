import React from "react";

export default function Home() {
  return (
    <div style={{ width: "70%", margin: "auto", textAlign: "left" }}>
      <h1 style={{ textAlign: "center" }}>Fullstack test questions</h1>
      <p>
        Below you can find the questions asked on this test. Each question has a
        link in the navbar.
      </p>
      <p>
        {" "}
        This question page was not needed for the project, but added it for
        reference when checking the questions{" "}
      </p>
      <h2 style={{ textAlign: "center" }}>Questions</h2>
      <hr />
      <h3>Question 1</h3>
      <p>
        Write a function that connects to https://restcountries.eu/ and gets a
        unique country from a specific name given using the Node back end and
        send it to the front end.
      </p>
      <h3>Question 2</h3>
      <p>
        Using the same API ( https://restcountries.eu/ ), and from an array of
        string, write a function that returns a list of countries where their
        name matches at least a part of one of these string use the Node back
        end and send it to the front end.
      </p>
      <h3>Question 3</h3>
      <p>
        Using the same API ( https://restcountries.eu/ ) in the React front end
        list all the countries and a field to filter the country by name.
      </p>
      <h3>Question 4</h3>
      <p>Considering a Slot machine defined like this:</p>
      <p>
        - Reel1: [“cherry”, ”lemon”, “apple”, ”lemon”, “banana”, “banana”,
        ”lemon”, ”lemon”]
      </p>
      <p>
        - Reel2: [”lemon”, “apple”, ”lemon”, “lemon”, “cherry”, “apple”,
        ”banana”, ”lemon”]
      </p>
      <p>
        - Reel3: [”lemon”, “apple”, ”lemon”, “apple”, “cherry”, “lemon”,
        ”banana”, ”lemon”]
      </p>
      <p>
        Coins: The user start with 20 coins, when the user run the function the
        user will lose 1 coin,
      </p>
      <p>1 spin = 1 coin </p>
      . 3 cherries in a row: won 50 coins <br />
      . 2 cherries in a row: won 40 coins <br />
      . 3 Apples in a row: won 20 coins <br />
      . 2 Apples in a row: won 10 coins <br />
      . 3 Bananas in a row: won 15 coins <br />
      . 2 Bananas in a row: won 5 coins <br />
      . 3 lemons in a row: won 3 coins <br />
      <p>
        Using these data, create a function that, when it’s called by the front
        end, gives back the result of a spin and show the result.
      </p>
      <br />
      <h2>SQL part</h2>
      <hr />
      <h3>Question 1</h3>
      <p>
        Use these sentences to draw a schema of a database you would create to
        store these information.
      </p>
      <ul>
        <li>You are working in a casino.</li>
        <li>A casino has games.</li>
        <li>Each game has a unique type</li>
        <li>
          Each game has one or more countries where players are allowed to bet
          from
        </li>
        <li>A player mey or may not have a favorite game</li>
      </ul>
      <h3>Question 2</h3>
      <p>
        Write based on above, a SQL query to get all players that have games of
        type “SLOT” as their favorite games.
      </p>
    </div>
  );
}
