const { makeExecutableSchema } = require("@graphql-tools/schema"); 


const {resolvers} = require("./resolvers/resolvers.js");
const {UserType} = require("./types/UserType.js")

const schema = makeExecutableSchema({ 
    typeDefs: [UserType], 
    resolvers: [resolvers],
})





module.exports = {schema}