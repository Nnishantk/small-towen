const {helpSupportEnt} = require("../Enity")

module.exports={

	async addHelpAndSupport(req,res,next){
		try{
	        let payload = req.body
			let result = await helpSupportEnt.addHelpSupport(payload)
		    if(result.success){
	
					res.status(result.success).json({
						success:result.success,
						status:result.status,
						message:result.message,
						data:result.message
					})

			}else{
			
					res.status(result.status).json({
						success:result.success,
						status:result.status,
						message:result.message
					})
				}
			
		
		}catch(error){
			res.status(500).json({
				message:error.message
			})
		}
	},

	// Get Help and support

	async getHelpSupport(req,res,next){
		try{
			let result = await helpSupportEnt.getHelpSupport({})
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