require("dotenv").config();

const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const { schema } = require("./Schema/schema.js");

const PORT = process.env.PORT || 4000;

const app = express();

const apolloServer = new ApolloServer({ schema, pugins: [] });

(async () => {
	await apolloServer.start();
	apolloServer.applyMiddleware({ app, path: '/'});

	app.listen(PORT, () => {
		console.log("Server running on " + PORT);
	});
})();
