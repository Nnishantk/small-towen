const {model,Schema} = require('mongoose')

const faqSchema = new Schema({

	title:{
		required:true,
		type:String,
	}
},
{
	timestamp:true
})

module.exports = model('faq',faqSchema)
