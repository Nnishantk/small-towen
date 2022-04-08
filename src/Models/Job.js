const {model,Schema } = require('mongoose');

const JobSchema = new Schema ({


	shift:{
		required:true,
		type:String
	},

	perHr:{
		type:String,
		required:true
	},  

	jobType:{
		type:String,
		required:true,
		enum:['permanent','volunteer'],
		
	},        

	title:{
		required:true,
		type:String,

	},

	img:{
		type:String,
		default:null,
	},

	subTitle:{
		type:String,
		required:true,

	},
	address:{
		type:String,
		required:true
	}
	
})

module.exports = model('job',JobSchema);