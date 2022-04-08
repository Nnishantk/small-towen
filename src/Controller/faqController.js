const {faqEnt} = require('../Enity')

module.exports ={

	 /**
     * @POST Create New faq
     * post
     */
	async addFaq (req,res){
		try{
		let payload = req.body
		let result = await faqEnt.addFaq(payload)
		if(result.status){
			res.status(result.status).json({
				success:result.success,
			  status:result.status,
			  data:result.data,
			  message:result.message
			  
			})
		}else{
			res.status(result.status).json({
				result:result.status,
				message:result.message
			})
		}

		}catch (error){
			res.status(500).json({
				message:error.message
			})
		}
	},

	// get faq

	async getFaq(req,res,next){

		try{
			let result = await faqEnt.getFaq({})
			if(result.success){
				
					res.status(result.status).json({
						success:result.success,
						status:result.status,
						data:result.data,
						message:result.message

					})

				
			}

		}catch(error){
			res.status(500).json({
				message:error.message
			})
		}

	}
}