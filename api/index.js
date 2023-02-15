const express = require("express");
const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

// Routes
app.get("/", require("./routes/login"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
