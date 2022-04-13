const {getAllUsers, addUser, getUserbyEmail, login} = require("./User/UserResolver");

const resolvers = {
	Query: {
		getAllUsers: async () => { 
            return await getAllUsers()
        }, 
        getUserByEmail: async (_, {email}) => { 
            return await getUserbyEmail(email)
        }, 
        login: async (_, {email, password}) => { 
            return await login(email, password)
        }
	},
	Mutation: {
		addUser: async (root, { User }) => { 
            return await addUser(User);
		},
	},
};

module.exports = { resolvers };
