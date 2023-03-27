// https://dev.to/franciscomendes10866/setup-mongodb-with-mongoose-and-express-4c58

const express = require("express")
// mongo connection
const mongoose = require("mongoose") // new

// import routes

const routes = require("./Routes/routes")

const bodyParser = require('body-parser');
const geocoder = require('geocoder');
// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/merndb", { useNewUrlParser: true })
	.then(() => {


        const app = express()
        
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        const cors = require('cors')
        app.use(cors())
                    app.use(express.json())  // new
		            app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})