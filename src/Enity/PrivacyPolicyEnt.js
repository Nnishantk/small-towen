const {privacyPolicy} = require('../Models')

module.exports={



	async addPrivacyPolicy(payload){
		const result = await new privacyPolicy(payload)
		await result.save()
		if (result){
			return {
				// success:true,
				status:200,
				data:result,
				message:'Add Privacy & Policy SuccessFully'
			}
		}else{
			return{
			success:false,
			status:400,
			message:'Something Went Wrong'
		  }
		}
	},

	async getPrivacyPolicy(payload){
	   try{
	   	const result = await privacyPolicy.find({});
	   	if (result){
	   		return{
	   			success:true,
	   			status:200,
	   			data:result,
	   			Message:'Get all Privacy & Policy SuccesFully',
	   		}
	   	  }else{
	   	  	return{
	   	  		success:false,
	   	  		status:400,
	   	  		Message:"something went wrong"
	   	  	}
	   	  }

	   }catch(error){
	   	payload.status(500).json({
	   		message:error.message
	   	})
	   }
	  },

	  async updatePrivacypolicy(policyId,payload){
	  	try {
	  		let result = await privacyPolicy.findByIdAndUpdate({_id:policyId},payload);
	  	if (result){
	  		return{
	  			// success:true,
	  			status:200,
	  			data:result,
	  			message:'Privacy & Policy Update SuccessFully'
	  		}
	  	}else{
	  		return {
	  			// success:false,
	  			status:404,
	  			message:'Record Not Found'
	  		}
	  	}

	  	}catch (error) {
	  		console.log(error)
	  		payload.status(500).json({
	  			message:error.message
	  		})
	  	}
	  }
}