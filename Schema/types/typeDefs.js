const { UserType } = require("./UserType.js"); 
const { NewsType } = require("./NewsType.js"); 

const typeDefs = [ UserType, NewsType ]; 


module.exports = {typeDefs}