"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("../../../databaseConnector.js"),
    usersCollection = _require.usersCollection;

var bcrypt = require("bcrypt");

var basicResponse =
/*#__PURE__*/
function () {
  function basicResponse() {
    _classCallCheck(this, basicResponse);

    this.responseBody = {
      message: {
        isError: false,
        description: "OK"
      },
      userInfo: null
    };
  }

  _createClass(basicResponse, [{
    key: "handleError",
    value: function handleError(error) {
      this.responseBody.message.description = error.message;
      this.responseBody.message.isError = true;
      this.responseBody.userInfo = null;
    }
  }, {
    key: "setUser",
    value: function setUser(newUser) {
      this.responseBody.userInfo = newUser;
    }
  }, {
    key: "setUserHashPass",
    value: function setUserHashPass(pass) {
      this.responseBody.userInfo.hashedPassword = pass;
    }
  }]);

  return basicResponse;
}(); // Get all the users 


function getAllUsers() {
  var result;
  return regeneratorRuntime.async(function getAllUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(usersCollection.find({}).toArray());

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

; // adding a User returning special response object 

function addUser(User) {
  var hashedPassword, response, userCheck, newUser, addedUser;
  return regeneratorRuntime.async(function addUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(hashPassword(User.password));

        case 2:
          hashedPassword = _context2.sent;
          response = new basicResponse();
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(usersCollection.findOne({
            email: User.email
          }));

        case 7:
          userCheck = _context2.sent;

          if (!userCheck) {
            _context2.next = 10;
            break;
          }

          throw new Error("Email already exists");

        case 10:
          // inserting the user into the database (if there is no such user yet) 
          newUser = _objectSpread({}, User, {
            hashedPassword: hashedPassword
          });
          _context2.next = 13;
          return regeneratorRuntime.awrap(usersCollection.insertOne(newUser));

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(usersCollection.findOne({
            email: User.email
          }));

        case 15:
          addedUser = _context2.sent;
          // setting up response fields and hashedPassword 
          response.setUser(addedUser); // response.setUserHashPass(hashedPassword);

          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](4);
          response.handleError(_context2.t0);
          console.log(response.responseBody);

        case 23:
          return _context2.abrupt("return", response.responseBody);

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 19]]);
} // hashing the password 


function hashPassword(password) {
  var saltRounds, hashedPassword;
  return regeneratorRuntime.async(function hashPassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          saltRounds = 10;
          _context4.next = 3;
          return regeneratorRuntime.awrap(bcrypt.genSalt(saltRounds).then(function _callee(salt) {
            return regeneratorRuntime.async(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 3:
          hashedPassword = _context4.sent;
          return _context4.abrupt("return", hashedPassword);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
} // Geting user by email 


function getUserbyEmail(email) {
  var response, newUser;
  return regeneratorRuntime.async(function getUserbyEmail$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          response = new basicResponse();
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(usersCollection.findOne({
            email: email
          }));

        case 4:
          newUser = _context5.sent;

          if (newUser) {
            _context5.next = 7;
            break;
          }

          throw new Error("No user with this email");

        case 7:
          // setting up response fields
          response.setUser(newUser);
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          response.handleError(_context5.t0);

        case 13:
          return _context5.abrupt("return", response.responseBody);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 10]]);
}

function login(email, password) {
  var response, userToLogin;
  return regeneratorRuntime.async(function login$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          response = new basicResponse();
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(usersCollection.findOne({
            email: email
          }));

        case 4:
          userToLogin = _context6.sent;

          if (userToLogin) {
            _context6.next = 7;
            break;
          }

          throw new Error("No such user");

        case 7:
          _context6.next = 11;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](1);

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  getUserbyEmail: getUserbyEmail
};