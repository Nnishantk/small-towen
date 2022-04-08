const {model,Schema} = require('mongoose')

const feedbackSchema = new Schema({

	user:{
		type:Schema.Types.ObjectId,
		required:true,
		ref:'user'
	},

	 handOver:{
	 	type:String,
	 	enum:['Great', 'Could be better','Not Good']

	 },
	  traningRequired:{
	  	type:String,
	  	required:true,
	  	enum:['yes','no']
	  },

	  traningRecieved:{
	  	type:String,
	  	required:true,
	  	enum:['yes','no']
	  },

	  comments:{
	  	type:String,
	  	required:true,
	  }


})

module.exports = model('feedback',feedbackSchema);