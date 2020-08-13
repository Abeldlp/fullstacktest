const express = require("express");
const fetch = require("node-fetch");

const route = express.Router();

//QUESTION 1 ROUTE
route.get("/:name", async (req, res) => {
  try {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/name/${req.params.name}`
    );
    const dataJson = await data.json();
    //Sending just one. A unique country
    res.send(dataJson[0]);
  } catch (error) {
    throw error;
  }
});


//QUESTION 2 ROUTE
route.post("/filteredcountries/", async (req, res) => {
  //GET countries inserted in the body
  let countries = req.body.countries;

  //Maps through the array fetching for the data
  let countriesmapped = countries.map((country) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((res) => res[0]);
  });

  //Sends to the frontend the
  Promise.all(countriesmapped).then((response) => res.send(response));
});

module.exports = route;
