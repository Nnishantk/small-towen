const {feedback} = require('../Models');

module.exports={


	async addFeedback(payload){
	 const result = await new feedback(payload)
	 await result.save()
	 if(result){
		return{
			// success:true,
			status:200,
			message:"Feedback send SuccesFully",
			data:result
			}
			}else{
	 	return {
	 		success:false,
	 		status:400,
	 		message:'Something went wrong'
	 	}
	 }
	},

	// get Feedback

	/**
     * @param {*} payload 
     * @returns {success:true/false}
     */

	async getFeedback(){
		let result = await feedback.find({},{__v:0})
		.populate('user')
		if (result){
			return{
				success:true,
				status:200,
				message:"Get Feedback succefully",
				data:result
			}
		}else{
			return{
				success:false,
			status:200,
			message:"Something went wrong"
			}
		}
	},

	 /**
     * 
     * @param {*} 
     * @returns {success:true/false}
     */
    async updateFeedback(feedabckId, payload) {
        let result = await feedback.findOneAndUpdate({ _id:feedabckId}, payload)
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
        let result = await feedback.findOneAndDelete({ _id:jobId })
        if (result) {
            return { success: true, data:result, code: 200, message: 'Successfully Deleted' }
        } else {
            return { success: false, code: 404, error: 'Record Not Found!!!' }
        }
    },



}