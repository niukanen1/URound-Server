"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\ttype User {\n\t\t_id: ID!\n\t\temail: String!\n\t\tfirstName: String\n\t\tlastName: String\n        hashedPassword: String!\n    }\n    type Message { \n        isError: Boolean!\n        description: String\n    }\n    type Response { \n        message: Message! \n        userInfo: User\n    }\n    input UserInput { \n        email: String!\n        password: String!\n        firstName: String\n        lastName: String\n    }\n    type Mutation { \n        addUser(User: UserInput!): Response!\n    }\n    type Query {\n\t\tgetAllUsers: [User!]!,\n        getUserByEmail(email: String!): Response! \n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("apollo-server"),
    gql = _require.gql;

var UserType = gql(_templateObject());
module.exports = {
  UserType: UserType
};