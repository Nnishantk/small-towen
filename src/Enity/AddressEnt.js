const {address} = require('../Models');

module.exports ={
	async addAddress(payload){
		try{
		const result = await new address(payload)
		result.save()
		if(result){
			return{
				success:true,
			status:200,
			data:result,
			message:"Add Address Succefully"
			}
		}else{
			return {
				success:false,
				status:400,
				message:"Something went wrong"
			}

		}

		}catch(error){
			throw error
		}
	},

	  async getAddress(){
        result = await address.find({})
        .populate('user')
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
