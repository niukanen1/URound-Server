"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    input UserInput { \n        email: String!\n        password: String!\n        firstName: String\n        lastName: String\n\n    },\n\n    type Mutation { \n        addUser(User: UserInput!): User!\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("apollo-server"),
    gql = _require.gql;

var Mutation = gql(_templateObject());
module.exports = {
  Mutation: Mutation
};