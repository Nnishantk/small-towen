const {rezorPayEnt} = require('../Enity');


module.exports={
	async rezorpay(req,res,next){
		payload = req.body
		console.log(req.body)
		let result = await rezorPayEnt.rezorpay(payload)
		

	}
}