const { gql } = require("apollo-server");

const NewsType = gql`
    type Post {  
        _id: ID! 
        title: String 
        minContent: String
        fullContent: String
        photos: [String] 
        creatorEmail: String! 
    }

    input postInput { 
        title: String
        minContent: String
        fullContent: String
        photos: [String]
        creatorEmail: String!
    }

    type Query { 
        getAllPosts: [Post!] 
        addNewPost(newPost: postInput!): BasicResponse!
    }
`

module.exports = {NewsType};