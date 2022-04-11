"use strict";

var _require = require("@graphql-tools/schema"),
    makeExecutableSchema = _require.makeExecutableSchema;

var _require2 = require("./resolvers/resolvers.js"),
    resolvers = _require2.resolvers;

var _require3 = require("./types/UserType.js"),
    UserType = _require3.UserType;

var schema = makeExecutableSchema({
  typeDefs: [UserType],
  resolvers: [resolvers]
});
module.exports = {
  schema: schema
};