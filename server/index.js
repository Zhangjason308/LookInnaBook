const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//const router = require("./routes/book_route");
const indexer = require("./routes/index");

//middleware
app.use(cors());
app.use(express.json()); //req.body
pool.connect;
app.use(indexer(pool));

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

module.exports = app;

