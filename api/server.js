const express = require("express");

const configureMiddleware = require("../config/middleware.js");
const doubler = require("../common/doublerMiddleware.js");
const productsRouter = require("../products/productsRouter.js");
const clientsRouter = require("../client/clientsRouter");

const server = express();

// middleware

configureMiddleware(server);
// require('../config/middleware.js')

// routes
// configureRoutes(server);

server.use("/products", productsRouter);
server.use("/clients", clientsRouter);

server.get("/products", (req, res) => {
  res.send("GET /products endpoint");
});

server.get("/clients", (req, res) => {
  res.send("GET /clients endpoint");
});

server.get("/orders", (req, res) => {
  res.send("GET /orders endpoint");
});

server.get("/", (req, res) => {
  res.send(`sanity check success, double: ${req.double}`);
});

server.get("/double", doubler, (req, res) => {
  res.send(`the value is ${req.query.number} and the double is ${req.double}`);
});

server.get("/:id", (req, res) => {
  res.send(`sanity check success, id: ${req.params.id}`);
});

module.exports = server;

`http://localhost:5000/?number=3`;
