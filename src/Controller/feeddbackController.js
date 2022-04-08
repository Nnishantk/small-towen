const {feedbackEnt} = require('../Enity')

module.exports={
	async addFeedback(req,res,next){
		try{
			const payload = req.body
			console.log(req.user);
		let result = await feedbackEnt.addFeedback({
			user: req.user,
			...payload
		})

		if (result.success){
			res.status(result.success).json({
				success:result.success,
				success:result.success,
				status:result.status,
				data:result.data,
				message:result.message
			})
		}else{
		
				res.status(result.status).json({
					success:result.success,
					status:result.status,
					message:result.message
				})
			
		}
	}catch(error){
		console.log(error)
   		res.status(500).json({
   			message:error.message
   		  })
    	}
	},

	// Get Feddack 

	async getFeedback(req,res,next){
		try{
			let result = await feedbackEnt.getFeedback({})
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
	},


	 async updateFeedback(req, res, next) {
        try {
            let payload = req.body;
            console.log(req.body)
            let FeedbackId = req.params.feedbackid
            let result = await feedbackEnt.updateFeedback(FeedbackId, payload)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data:result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }
        } catch (error) {
            next(error)
        }
    },

    async deleteJob(req, res, next) {
        try {
            let FeedbackId = req.params.feedbackid
            let result = await feedbackEnt.deleteJob(FeedbackId)
            if (result.success) {
                res.status(result.code).json({
                    success:result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success:result.success,
                    message: result.error
                })
            }

        } catch (error) {
            next(error)
        }
    },
}