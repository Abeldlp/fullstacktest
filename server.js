const express = require("express");
const app = express();
const countriesRoute = require("./routes/countries");

app.use("/api/countries", countriesRoute);

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
