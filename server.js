require("dotenv").config();
require("colors");
const express = require("express");

const connectDB = require("./dbinit.js");
const users = require("./api/users");
const orders = require("./api/orders");
const server = express();
const PORT = process.env.PORT || 8000;

connectDB();

server.use(express.json());
server.get("/", (req, res) => res.send("Welcome to Node with Postgres!"));
server.use("/users", users);
server.use("/orders", orders);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
