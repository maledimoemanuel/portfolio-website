const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log(`MongoDB connected...`))
    .catch((err) => console.log("Conection failed!", err));

//routes

const skillRoutes = require("./routes/skillRoutes");
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});