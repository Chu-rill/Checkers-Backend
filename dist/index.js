"use strict";
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { options } = require("joi");
const port = process.env.PORT || 4006;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.json({ status: "success request" });
});
app.listen(port, () => console.log(`Server started on port ${port}`));
