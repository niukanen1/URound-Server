const { makeExecutableSchema } = require("@graphql-tools/schema"); 


const {resolvers} = require("./resolvers/resolvers.js");
const {UserType} = require("./types/UserType.js"); 
const {typeDefs} = require("./types/typeDefs"); 
const schema = makeExecutableSchema({ 
    typeDefs: typeDefs, 
    resolvers: [resolvers],
})





module.exports = {schema}