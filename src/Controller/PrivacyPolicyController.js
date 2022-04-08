const {privacyPolicyEnt} = require('../Enity')

module.exports={
	 async addPrivacyPolicy(req,res){
	 	try{
	    const payload = req.body
	 	const result = await privacyPolicyEnt.addPrivacyPolicy(payload)
	 	if(result.status){
	 	res.status(result.status).json({
	 		    success:result.success,
	 			status:result.status,
	 			message:result.message,
	 			data:result.data
	 		})
	 	}else{
 		res.status(result.status).json({
				success:result.success,
				message:result.message,
		})
	 	}
	 	}catch(error) {
	 		   res.status(500).json({
	 			message:error.message
	 		})
	 	}

	 },

	 //get Privacy Policy

	 async getPrivacyPolicy(req,res){
	 	try{
	 		const result = await privacyPolicyEnt.getPrivacyPolicy()
	 		if(result.status){
	 				res.status(result.status).json({
	 					status:result.status,
	 					data:result.data,
	 					message:result.message   
	 				})
	 			}else{
      		res.status(result.status).json({
      			success:result.success,
      			message:result.message,
      		})
      	}

	 		

	 	}catch (error) {
	 		res.status(500).json({
	 			message:error.message
	 		})
	 	}
	 },

	 async updatePrivacypolicy(req,res,next){
	 	try{
	 	let payload = req.body
	 	let policyId = req.params.policyId
	 	let result = privacyPolicyEnt.updatePrivacypolicy(policyId,payload)
       if (result.success){
       	res.status(result.success).json({
       		success:result.success,
       		message:result.message,
       		data:result.data
       	})
       }
       else{
      		res.status(result.success).json({
      			success:result.status,
      			message:result.message,
      		})
      	}

	 	}catch(error){
	 		console.log(error)
	 		res.status(500).json({
	 			message:error.message
	 		})
	 	}
	 }

}







	 