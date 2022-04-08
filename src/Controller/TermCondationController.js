const {termCondationEnt} = require('../Enity');

module.exports={

	

	async addTermCondation(req,res,next){
	  try{
	  	const payload = req.body
	  let result = await termCondationEnt.addTermCondation(payload)
	  if(result.success){
	  	res.status(result.success).json({
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
	}catch(error){
	  	res.status(500).json({
	  		message:error.message
	  	})
	  }
   },

   // get all Term & Condation 
      async getAlltermCondation(req,res,next){
      try{
      	let result = await termCondationEnt.getAllTermCondation();
      	if (result.status){
      		res.status(result.status).json({
      			success:true,
      			message:result.Message,
      			data:result.data,
      		})
      	}else{
      		res.status(result.status).json({
      			success:true,
      			message:result.message,
      		})
      	}

       }catch(error){
      	res.status(500).json({
      		message:error.message
      	})
      }
    },

    async updateTermAndCondation(req,res,next){
    	try{
    		let payload = req.body
    		let termCondationId = req.params.termCondationId
    		let result = await termCondationEnt.updateTermCondation(termCondationId,payload)
    		if(result.success){
    			res.status(result.status).json({
    				success:result.success,
    				message:result.message,
    				data:result.data
    			})
    		}else{
    			res.status(result.status).json({
    				success:result.success,
    				message:result.message
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