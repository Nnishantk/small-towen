const {model,Schema} = require('mongoose');

const addressSchema = new Schema ({


	user:{
		type:Schema.Types.ObjectId,
		required:true,
		ref:'user'
	},

	address:{
		type:String,
		required:true
	},


})


module.exports = model('address',addressSchema)