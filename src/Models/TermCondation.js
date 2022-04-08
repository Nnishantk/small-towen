const {model,Schema} = require('mongoose');

const tremSchema = new Schema({


	title:{
		type:String,
		required:true
	}
},
{
	timestamp:true
})

module.exports = model('termcondation', tremSchema);