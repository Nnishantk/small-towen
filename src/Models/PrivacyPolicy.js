const {model,Schema} = require('mongoose');

const privacyPolicySchema = new Schema ({

	title:{
		type:String,
		required:true
	}
},
{
	timestamp: true
})

module.exports = model('privacypolicy',privacyPolicySchema);         