require("dotenv").config({ path: __dirname + "/.env" });
require('newrelic');
const server = require("./server.js");
let port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Development environment listening on port ${port}!`));
