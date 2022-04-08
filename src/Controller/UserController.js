const {userEnt} = require('../Enity');
const jwt = require("jsonwebtoken");

const generateJwtToken= (id) => {
	return jwt.sign({id}, process.env.SECRETK,{
		expiresIn:'7d'
	})
}

module.exports={
	//user registion 

	async register(req,res,next){
		try{
			let payload = req.body;
			if(req.files['idProof']){
				let idProof = {
					filename:req.files['idProof'][0].filename,
					filetype:req.files['idProof'][0].mimtype,
					filesize:req.files['idProof'][0].filesize,
					url:'Public/user/documents/' + req.files['idProof'][0].filename      
				}
				payload.idProof = idProof
			   }
			if(req.files['resume']){
				let resume = {
					filename:req.files['resume'][0].filename,
					filetype:req.files['resume'][0].mimtype,
					filesize:req.files['resume'][0].filesize,
					url:'Public/user/documents/' + req.files['resume'][0].filename
				}
				payload.resume = resume
			}

			if(req.files['addressProof']){
				let addressProof = {
					filename:req.files['addressProof'][0].filename,
					filetype:req.files['addressProof'][0].mimtype,
					filesize:req.files['addressProof'][0].filesize,
					url:'Public/user/documents/' + req.files['addressProof'][0].filename
				}
				payload.addressProof = addressProof
				
			}

			let result = await userEnt.register(payload)
			if(result.success){
				const token = generateJwtToken();
				res.status(result.success).json({
					// success:result.success,
					message:result.message,
					data:result.data,  
					token

				})

			}else{
				res.status(result.status).json({
					success:result.success,
					message:result.message,

			})
			
		}
	}catch(e){
	   next(e)
	  }
   },

   // user login
   async login(req,res,next){
   	try{
   		const payload = req.body;
   		console.log(req.body)
   		let result = await userEnt.login(payload)
   			console.log(result)
   		if (result.success){
   			const token = generateJwtToken(result.data._id);
           res.status(result.status).json({
          	success:result.success,
          	message:result.message,
          	token
          })
   		}
          else{
          	res.status(result.status).json({
          		success:false,
          		message:result.message
          })
          }

   	     }catch(error){
   		res.status(500).json({
   			message:error.message
   		  })
    	}
    },

    // login with Facebook

    async loginWithFaceBook(req,res,next){
    	try{
    		const result = await userEnt.loginWithFacebookAccesToken(req.body.fbToken)
   			const token = generateJwtToken(result.data.user._id);

    		return res.status(result.status).json({
    			message:result.message,
    			user:result.data.user,
    			loginToken:token
    		})

    	}catch(error){
    		console.log(error)
    		throw error
    		next(error)
    	}

    },

    // get user from fb 

    async getuserFromFb(req,res,next){
    	try{
    		const result = await userEnt.getFbUser(req.params.userId);
    		return res.status(result.status).json({
    			message:result.message,
    			user:result.data
    		})

    	}catch(error){
    		console.log(error)
    		next(error);
    	}
    },

    // get all user

    async getAllUser(req,res,next){
      try{
      	let result = await userEnt.getAllUser();
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

    // Otp send to mail 

    async sendMail(req,res){
    	try{
    		let payload = req.body
    		let result = await userEnt.sendMail(payload)
    		console.log(result)
    		if(result.success){
            res.status(result.status).json({
          	success:result.success,
          	message:result.message,
          	// data:result.data,
          	otp:result.otp
          })
   		  }
          else{
	 	res.status(result.status).json({
			success:false,
			message:result.message
           })
           }

    	   }catch (error){
    		res.status(500).json({
    		message:error.message
    		})
    	}

    },

    async changePassword(req,res){
    	try{
    		const payload = req.body
    		// console.log(payload)
    	let result = await userEnt.changePassword(payload)
    	// console.log("hello",payload)
    	if(result.status){
    		res.status(result.status).json({
    			success:result.success,
    			message:result.message,
    			data:result.data
    		})
    	    }
    	else{
    		res.status(result.status).json({
    			success:false,
    			message:result.message
    		  })
    	     }
    

    	}catch (error){
    		res.status(500).json({
    			message:error.message
    		})
        }
     }
  }
