const { usersCollection } = require("../../../databaseConnector.js");
const bcrypt = require("bcrypt");

class basicResponse { 
    constructor() { 
        this.responseBody = { 
            message: { 
                isError: false, 
                description: "OK",
            }, 
            userInfo: null
        }
    }
    handleError(error) { 
        this.responseBody.message.description = error.message; 
        this.responseBody.message.isError = true; 
        this.responseBody.userInfo = {}; 
    }
    setUser(newUser) { 
        this.responseBody.userInfo = newUser;
    }
    setUserHashPass(pass) { 
        this.responseBody.userInfo.hashedPassword = pass; 
    }
}


// Get all the users 
async function getAllUsers() {
    const result = await usersCollection.find({}).toArray();
    return result;
}; 

// adding a User returning special response object 
async function addUser (User) {
    const hashedPassword = await hashPassword(User.password);
    const response = new basicResponse(); 
    try  { 

        // checking if the user is in the database 
        const userCheck = await usersCollection.findOne({email: User.email});
        if (userCheck) { 
            throw new Error ("Email already exists"); 
        }

        // inserting the user into the database (if there is no such user yet) 
        const newUser =  { 
            ...User, 
            hashedPassword: hashedPassword,
        }
        await usersCollection.insertOne(newUser); 
        const addedUser = await usersCollection.findOne({email: User.email});
        // setting up response fields and hashedPassword 
        response.setUser(addedUser); 
        // response.setUserHashPass(hashedPassword);
    } catch (err) { 
        response.handleError(err); 
        console.log(response.responseBody)
    }
    
    return response.responseBody;
}
// hashing the password 
async function hashPassword(password) {
	const saltRounds = 10;
	const hashedPassword = await bcrypt.genSalt(saltRounds).then( async salt => { 
        return await bcrypt.hash(password, salt); 
    })
    return hashedPassword;
}

// Geting user by email 
async function getUserbyEmail(email) { 
    const response = new basicResponse(); 
    try { 
        // looking for user 
        const newUser = await usersCollection.findOne({email : email }); 

        // throwing an error if there is no such user 
        if (!newUser) { 
            throw new Error ("No user with this email") 
        } 

        // setting up response fields
        response.setUser(newUser);
    } catch (err) { 
        response.handleError(err); 
    }
    return response.responseBody;
}

async function login (email, password) { 
    const response = new basicResponse(); 
    try { 
        const userToLogin = await usersCollection.findOne({ email : email }); 
        if ( !userToLogin ) { 
            throw new Error("No such user"); 
        }
    } catch (err) { 
        
    }
}

module.exports = {getAllUsers, addUser, getUserbyEmail}; 