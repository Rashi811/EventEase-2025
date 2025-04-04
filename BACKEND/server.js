const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./Routes/eventRoutes");

const app = express();
const cors = require("cors");
app.use(cors());

const taskRoutes = require('./Routes/taskRoutes');

// Middleware
app.use(express.json());
app.use("/events", eventRoutes);
app.use('/api/tasks', taskRoutes);

mongoose
    .connect("mongodb+srv://admin:qdCLshxvlN21D6PJ@cluster1.ppdle.mongodb.net/eventEaseDB?retryWrites=true&w=majority&appName=Cluster1")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.log("DB Connection Error: ", err));
