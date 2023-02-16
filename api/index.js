const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

// views
app.set("view engine", "ejs");

// database
const mongoose = require("mongoose");
const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Passport config
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Authentication/Session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/login"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
