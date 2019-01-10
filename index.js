// console.log("index");

// const server = require("./server.js");

// server();

// console.log("index");

// const server = require("./server.js");

// server.greet();

// console.log(server.secret);

const server = require("./api/server.js");

server.listen(process.env.PORT || 5000, () => console.log("server on port 5k"));
