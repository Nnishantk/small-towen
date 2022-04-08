const {helpSupport} = require('../Models')

module.exports={
	async addHelpSupport(payload){
		const result = await new helpSupport(payload)
		await result.save()
		if (result){
			return {
				// success:true,
				status:200,
				message:"Help Support add Succefully",
				data:result
			}
		}else{
			return {
				success:false,
				status:400,
				message:"Something Went Wrong"
			}
		}

	},
	//Get help & support

	async getHelpSupport(){
		let result = await helpSupport.find({},{__v:0})
		if (result){
			return{
				success:true,
				status:200,
				message:"Get Help succefully",
				data:result
			}
		}else{
			return{
				success:false,
			status:200,
			message:"Something went wrong"
			}
		}
	}
}