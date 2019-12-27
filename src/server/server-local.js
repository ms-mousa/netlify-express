"use strict";
// run any lambda function locally to test it
const server = require("./functions/user");

server.listen(3000, () => console.log("Local app listening on port 3000!"));
