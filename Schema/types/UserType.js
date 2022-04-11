const { gql } = require("apollo-server");
const UserType = gql`
	type User {
		_id: ID!
		email: String!
		firstName: String
		lastName: String
        hashedPassword: String!
    }
    type Message { 
        isError: Boolean!
        description: String
    }
    type Response { 
        message: Message! 
        userInfo: User
    }
    input UserInput { 
        email: String!
        password: String!
        firstName: String
        lastName: String
    }
    type Mutation { 
        addUser(User: UserInput!): Response!
    }
    type Query {
		getAllUsers: [User!]!,
        getUserByEmail(email: String!): Response! 
	}
`;

module.exports = { UserType };
