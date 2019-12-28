("use strict");
// Require the serverless HTTP to make the server work with lambda functions
const serverless = require("serverless-http");
const postRouter = require("../routes/post");

// import server file
const server = require("../server");
// user the router for the user API
server.use("/.netlify/functions/", postRouter); // path must route to lambda

// export the server itself for local testing
module.exports = server;
// export the handler to lambda function with the serverless package
module.exports.handler = serverless(server);
