const {model,Schema}= require('mongoose')

const helpsupportSchema = new Schema({


	email:{
		required:true,
		type:String,
	},

	number:{
		required:true,
		type:Number
	},

	address:{
		type:String,
		required:true
	}
},
{
	timestamp:true
})

module.exports = model('helpsupport',helpsupportSchema);