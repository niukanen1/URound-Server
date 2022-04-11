"use strict";

require('dotenv').config();

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var client = new MongoClient(process.env.URL);
var database = client.db("URound");
var usersCollection = database.collection('users');
client.connect(function _callee(err) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (err) {
            console.log("ERROR :::: " + err);
          } else {
            console.log("MongoDB connected succesfully!");
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = {
  usersCollection: usersCollection
};