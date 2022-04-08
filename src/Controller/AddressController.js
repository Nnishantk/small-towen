const {addressEnt} = require('../Enity');

module.exports={
	async addAddress(req,res,next){
     try{
		let payload = req.body
		let result = await addressEnt.addAddress({
			user: req.user,
			...payload
		})
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

async getAddress(req,res,next){

		try{
			let result = await addressEnt.getAddress({})
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
