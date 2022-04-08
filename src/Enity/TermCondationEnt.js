const {termCondation} = require('../Models');

module.exports={

	/**
     * @param {*} payload 
     * @returns {success:true/false}
     */


	async addTermCondation(payload){
		const result = await new termCondation(payload)
		await result.save()
		if (result){
            return {
            	status:200,
            	// success:true,
            	data:result,
            	message:'Term And Condation Add Successfully'
            }
		}else{
			return {
				success:false,
				status:400,
				message:'something went wrong'
			}

		}
	},

	 async getAllTermCondation(){
	   	const result = await termCondation.find({},{ __v: 0 });
	   	if (result){
	   		return{
	   			success:true,
	   			status:200,
	   			data:result,
	   			Message:'Get all Term & Condation SuccesFully',
	   		}
	   	  }else{
	   	  	return{
	   	  		success:false,
	   	  		status:400,
	   	  		Message:"something went wrong"
	   	  	}
	   	  }
	  },


	  async updateTermCondation(termCondationId,payload){
	  	const result = await termCondation.findByIdAndUpdate({_id:termCondationId,},payload)
	  	if(result){
	  		return{
	  			success:true,
	  			status:200,
	  			data:result,
	  			message:"Successfully Update"
	  		}
	  	}else{
	  		return{
	  			success:true,
	  			status:404,
	  			message:"Record not found!!!"
	  		}
	  	}
	  }
}