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
const helmet = require("helmet");
const cors = require("cors");

const server = express();

// middleware
function doubler(req, res, next) {
  const value = req.query.number;

  if (value) {
    req.double = value * 2;
    next();
  } else {
    res.status(400).send("You Need To Provide A Number Please...");
  }

  next();
}

server.use(morgan("short"));
server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use(doubler);  // global middleware

// routes
// server.get("/", (req, res) => {
//   res.send(`the value is ${req.query.number} and the double is ${req.double}`);
// });
server.get("/", (req, res) => {
  res.send(`sanity check success`);
});

server.get("/double", doubler, (req, res) => {
  // using local middleware
  res.send(`the value is ${req.query.number} and the double is ${req.double}`);
});

module.exports = server;

// `http://localhost:5000/?number=3` || `http://localhost:5000?number=3`
