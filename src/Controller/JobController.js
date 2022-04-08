const {jobEnt} = require('../Enity')

module.exports={
	async addJob (req,res){
		try{ 
			let payload = req.body
			console.log(req.body)
			let result = await jobEnt.addJob(payload)
				if(result.status){
					res.status(result.status).json({
						success:result.success,
						status:result.status,
						message:result.message,
						data:result.data
					})
				}else{
					res.status(result.status).json({
						success:result.success,
						status:result.status,
						message:result.message
					})
				}
			

		}catch(error){
			res.status(500).json({
				message:error.message
			})
		}
	},


	 async getJob(req,res){
	 	try{
	 		const result = await jobEnt.getJob(req.query);
	 		if(result.status){
	 				res.status(result.status).json({
	 					status:result.status,
	 					data:result.data,
	 					message:result.message   
	 				})
	 			}else{
      		res.status(result.status).json({
      			success:result.success,
      			message:result.message,
      		})
      	}
	 	}catch (error) {
	 		res.status(500).json({
	 			message:error.message
	 		})
	 	}
	 },


	      async updateJob(req, res, next) {
        try {
            let payload = req.body;
            console.log(req.body)
            let jobId = req.params.jobid
            let result = await jobEnt.updateJob(jobId, payload)
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
            let jobId = req.params.jobid
            let result = await jobEnt.deleteJob(jobId)
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