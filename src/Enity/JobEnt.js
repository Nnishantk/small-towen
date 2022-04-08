const {job} = require('../Models');

module.exports={
	async addJob(payload){
		const result = await new job(payload)
		result.save()
		if(result){
			return{
				success:true,
				status:200,
				data:result,
				message:'Add Successfully'
			}
		}else{
			return{
				success:false,
				status:400,
				message:'Something went Wrong'
			}
		}
	},



	async getJob(query){
	   try{
	   	if(!query){
	   		query = {};
	   	}
	   	const result = await job.find(query);
	   	if (result){
	   		return{
	   			success:true,
	   			status:200,
	   			data:result,
	   			Message:'Get all Job SuccesFully',
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

	    /**
     * 
     * @param {*} 
     * @returns {success:true/false}
     */
    async updateJob(jobId, payload) {
        let result = await job.findOneAndUpdate({ _id:jobId}, payload)
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully updated' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

      /**
     * @param {*} 
     * @returns {success:true/false}
     */
    async deleteJob(jobId) {
        let result = await job.findOneAndDelete({ _id:jobId })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully Deleted' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },

}