const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

// Routes
app.get("/", require("./routes/login"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
