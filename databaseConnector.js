require('dotenv').config()
const { MongoClient } = require('mongodb'); 

const client = new MongoClient(process.env.URL);
const database = client.db("URound");

const usersCollection = database.collection('users'); 
client.connect(async (err) => { 
    if (err) {
        console.log("ERROR :::: " + err);
    } else {
        console.log("MongoDB connected succesfully!")
    }
})


module.exports = { usersCollection }