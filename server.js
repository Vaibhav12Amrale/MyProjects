const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('../TodayTask/Db/connection');
app.use(express.json());
const userroute = require('../TodayTask/Routes/userroute');

app.use("/user", userroute);

app.get("/", (req, res) => {
    res.send("hello friends");
});

const port = 4000;
app.listen(port, () => {
    console.log(` port run at localhost ${port}`);
});

