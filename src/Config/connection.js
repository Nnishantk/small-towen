const mongoose = require("mongoose");

module.exports = () => {
	mongoose.connect(process.env.DBURL, {
		useNewUrlParser:true,
		useUnifiedTopology:true,
	})
	.then(()=> {
		console.log('Mongodb Connect..!')
	})
	.catch(error=> console.log(error.message))
	mongoose.connection.on('connected',() =>{
		console.log('mongoose connected to Db...')
	})

	mongoose.connection.on('error',	(err)=>{
		console.log(err.message);
	})

	mongoose.connection.on('disconnected', (err) =>{
		console.log('mongoose connection is disconnected...')

	})

}