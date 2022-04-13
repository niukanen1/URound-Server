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

    
    interface Response { 
        message: Message! 
    }
    type BasicResponse implements Response { 
        message: Message! 
        userInfo: User
    }
    type LoginResponse implements Response { 
        message: Message! 
        isLoggedIn: Boolean!
    }


    input UserInput { 
        email: String!
        password: String!
        firstName: String
        lastName: String
    }
    type Mutation { 
        addUser(User: UserInput!): BasicResponse!
    }
    type Query {
		getAllUsers: [User!]!,
        getUserByEmail(email: String!): BasicResponse!,
        login(email: String!, password: String!): LoginResponse!
	}
`;

module.exports = { UserType };
