const rezorpay = require("rezorpay");

module.exports={

	async rezorpay(payload){
		const instance = await new rezorpay({
			payload,
			key_id:process.env.KEYID,
			key_secrate:process.env.KEYSECRET,	
		})
	}instance.orders.create(options,function(err,data){
		console.log(data)
	})
}