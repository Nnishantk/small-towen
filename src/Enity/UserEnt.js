const {user,otp} = require('../Models');
const bcrypt = require("bcrypt");
const emailHelper = require('../helper/email');
const tokenHelper = require('../helper/Token');
const axios = require('axios');
const passwordHelper = require('../helper/password');
module.exports = {

	// user signup

	async register(payload){
		payload.password = await passwordHelper.hashPassword(payload.password, 10);
		const result = await new user(payload)
		await result.save()
		if (result){
			return {status:200,message:'Resgisterd Successfully',data:result}
		}else{
			return {success:false,status:400,message:'something went wrong'}
		}
	},

	// user login
	async login(payload){
		const result = await user.findOne({email:payload.email, isDeleted:false});
		if (result){
			
			const isValid = await result.isValidPassword(payload.password);
			if(isValid){
				return{
					success:true,
					status:200,
					message:"Login successfully",
					data:result
				}
			}else{
				return{
					success:false,
					status:400,
					Message:"Email or password is incorrect"
				};
			}
		   }else{
				return{
				success:false,
				status:404		,
				Message:'User Not Found'
		     	}
			}
	   },

	   // login with Facebook

	   async loginWithFacebookAccesToken(fbToken){
	   	try{
	   		const fbUser = await this.getFbUser(fbToken);
	   		let userDoc = await user.findOne({
	   			fb_user_id: fbUser.id,
	   		})

	   		if (!userDoc){
	   			userDoc =await user.create({
	   				email: fbUser.email,
	   				firstName: fbUser.name,
	   				provider: 'facebook',
	   				fb_user_id: fbUser.id,
	   			});
	   		}

	   		// const longfbToken = await getLongliveToken(fbToken);
	   		// userDoc.fb_access_token = longfbToken.access_token;
	   		// await userDoc.save()
	   		// const loginToken = await tokenHelper.generateToken(userDoc._id);
	   		return{
	   			success:true,
	   			status:200,
	   			data:{
	   				user: userDoc,
	   				// loginToken
	   			}
	   		}


	   	}catch(error){
	   		throw error
	   	}
	   },


	   // get  fb user

	   async getFbUser(fbToken){
	   	try{
	   		const response = await axios.get(`${process.env.FACEBOOK_GRAPH_URL}me`,{

	   		
	   		params:{
	   			fields:
	   				"id,name,email",
	   				access_token:fbToken
	   		}
            });
            console.log(response.data);
            const fbUser = response.data;
            return fbUser
	   	}catch(error){
	   		throw error
	   	}

	   },
      // get all user

	   async getAllUser(payload){
	   	const result = await user.find({isDeleted:false});
	   	if (result){
	   		return{
	   			success:true,
	   			status:200,
	   			data:result,
	   			Message:'Get all user SuccesFully',
	   		}
	   	  }else{
	   	  	return{
	   	  		success:false,
	   	  		status:400,
	   	  		Message:"something went wrong"
	   	  	}
	   	  }
	  },

	  // send email

	  async sendMail(payload){
	  	const result = await user.findOne({email:payload.email})
	  	if (result){
	  		const code = Math.floor(100000 + Math.random() * 900000);
	  		let otpData = await otp.findOne({email: payload.email});
	  		if(!otpData){
	  			otpData = new otp();
	  		}
          otpData.email = payload.email;
          otpData.code = code;
          otpData.expiresIn = new Date().getTime() + 300 * 1000;
	  		 await otpData.save();
	  		 await emailHelper.sendMail(result.email, `Otp is: ${code}`, payload.email)
			return {
				success:true,
				status:200,
				message:'Otp send SuccesFully Your email',
				data:result,
				otp:code
			}
			
		   }else{
			return {
				success:false,
				status:400,
				message:'something went wrong'
			    }
		     }
	  	  },

           async changePassword(payload){
           	console.log(payload)
           	const result = await otp.findOne({ code: payload.code });
           	console.log("ent",result)
           	if(result){
           		let currentTime = new Date().getTime();
           		let diff = result.expireIn - currentTime
           		if(diff < 0){
           			return {
           				success:false,
           				status:400,
           				message:"otp expires"
           			}

           	     }else{
           	     	let _user = await user.findOne({email:result.email});
           	     	console.log(_user)
           	     	if (_user){
           	     		const salt = await bcrypt.genSalt(10)
           	     		const hash = await bcrypt.hash(payload.password, salt);
           	     		console.log(hash)
           	     		_user.password = hash;
                       _user.save()
                       return {
                       	success:true,
                       	status:200,
                       	message:"Password succefully"

                       }

           	     	}
           	     }
               }else{
               	return {
               		success:false,
               		status:400,
               		message:'Something went wrong'
               	}
               }
           	}
	   }


