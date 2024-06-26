const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const Routes = require("./src/MainRoutes");
// const taskRoutes = require("./src/routes/TaskRoutes");
const { options } = require("joi");
const port = process.env.PORT || 4006;

const app = express();
app.use(express.json());
app.use(cors());
//import your routes
app.get("/", (req, res) => {
  res.json({ status: "success request" });
});

app.use("/routes", Routes);
// app.use("/auth", authRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
