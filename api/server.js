// module.exports = greet;

// function greet() {
//   console.log("server");
// }
// module.exports = {
//   greet,
//   secret: "shhhh"
// };

// function greet() {
//   console.log("server");
// }
const express = require("express");
const morgan = require("morgan");

const server = express();
server.use(express.json());
server.use(morgan("short"));

// middleware

// routes
server.get("/", (req, res) => {
  res.send("server alive");
});

module.exports = server;
