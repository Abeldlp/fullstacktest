const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const countriesRoute = require("./routes/countries");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/countries", countriesRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
