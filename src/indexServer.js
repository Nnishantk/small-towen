const express = require('express');
const app = express();
const env = require('dotenv');
const path = require('path');
const handler = require("./MiddleWare/errorHandle");
const connection = require('./Config/connection');
const cors = require('cors');


env.config();
// Mongoose Connection
connection();

app.use(express.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mb',extended:true	}));

app.use(cors());
app.use('/Public', express.static(path.join(__dirname, 'Public')))

app.use('/api', require("./Routes"))
// app.use(handler.invalidRoute,handler.ErrorHandler)

app.listen(process.env.PORT, () =>{
	console.log(`Your Server is Runing on Port ${process.env.PORT}`)
});