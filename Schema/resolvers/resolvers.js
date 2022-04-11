const {getAllUsers, addUser, getUserbyEmail} = require("./User/UserResolver");

const resolvers = {
	Query: {
		getAllUsers: async () => { 
            return await getAllUsers()
        }, 
        getUserByEmail: async (_, {email}) => { 
            return await getUserbyEmail(email)
        }, 
	},
	Mutation: {
		addUser: async (root, { User }) => { 
            return await addUser(User);
		},
	},
};

module.exports = { resolvers };
