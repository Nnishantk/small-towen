const {faq} = require('../Models')

 module.exports = {

 	/**
     * @param {*} payload 
     * @returns {success:true/false}
     */

 	async addFaq(payload){
 		result = await new faq(payload)
 		 await result.save()
 		 if (result){
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
	 		message:'Something went wrong'
 		 	}
 		 }
 	},

    // get faq

    async getFaq(payload){
        result = await faq.find({})
        if(result){
            return{
                success:true,
                status:200,
                data:result,
                message:"Get Succefully"
            }
        }else{
            return {
                success:false,
                status:400,
                message:"Something went Wrong"
            }
        }
    }
 }