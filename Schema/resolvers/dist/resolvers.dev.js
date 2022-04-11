"use strict";

var _require = require("./User/UserResolver"),
    _getAllUsers = _require.getAllUsers,
    _addUser = _require.addUser,
    getUserbyEmail = _require.getUserbyEmail;

var resolvers = {
  Query: {
    getAllUsers: function getAllUsers() {
      return regeneratorRuntime.async(function getAllUsers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_getAllUsers());

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getUserByEmail: function getUserByEmail(_, _ref) {
      var email;
      return regeneratorRuntime.async(function getUserByEmail$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = _ref.email;
              _context2.next = 3;
              return regeneratorRuntime.awrap(getUserbyEmail(email));

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  Mutation: {
    addUser: function addUser(root, _ref2) {
      var User;
      return regeneratorRuntime.async(function addUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              User = _ref2.User;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_addUser(User));

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }
};
module.exports = {
  resolvers: resolvers
};