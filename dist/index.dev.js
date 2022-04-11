"use strict";

require("dotenv").config();

var _require = require("apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var express = require("express");

var _require2 = require("./Schema/schema.js"),
    schema = _require2.schema;

var PORT = process.env.PORT || 4000;
var app = express();
var apolloServer = new ApolloServer({
  schema: schema,
  pugins: []
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(apolloServer.start());

        case 2:
          apolloServer.applyMiddleware({
            app: app,
            path: '/'
          });
          app.listen(PORT, function () {
            console.log("Server running on " + PORT);
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})();