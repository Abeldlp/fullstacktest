const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const countriesRoute = require("./routes/countries");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

//MIDDLEWARE ROUTE
app.use("/api/countries", countriesRoute);

const PORT = process.env.PORT || 8000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
