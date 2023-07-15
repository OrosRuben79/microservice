const express = require("express");
const morgan = require("morgan");

const server = express();
const router = require("./routes/index");

server.use(morgan("dev"));
server.use(express.json());

server.use('/', router);

module.exports = server;
