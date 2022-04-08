const {model,Schema} = require('mongoose');
const bcrypt = require('bcrypt');
 
 const userSchema = new Schema({

    fb_user_id:{
        type:String,
    },

     fb_access_token:{
        type:String,

     },

     provider: {
        type: String,
        enum: ['password', 'facebook', 'email']
     },

 	title:{
 		type:String,
 		min:3,
 		max:5
 	},
 	firstName:{
 		type:String,
 		min:3,
 		max:5
 	},
 	secondName:{
 		type:String,
 		
 	},
 	lastName:{
 		type:String,
 		
 	},
 	dob:{
 		type:String,
 	},
 	gender:{
 		type:String,
 		enum:['male','female'],
 		
 	},
 	idProof:{
 		filename:{
 			type:String,
 			default:null,
 		},
 		filetype:{
 			type:String,
 			default:null,

 		},
 		filesize:{
 			type:String,
 			default:null,

 		},
 		url:{
 			type:String,
 			default:null

 		}
 	},
 	physicalAddress:{
 		type:String,
 	},
 	zipCode:{
 		type:String
 	},
 	city:{
 		type:String,
 		
 	},
 	state:{
 		type:String,
 		
 	},

 	addressProof:{
 		 filename:{
            type:String,
            default:null,
        },
        filetype:{
            type:String,
            default:null,

        },
        filesize:{
            type:String,
            default:null,

        },
        url:{
            type:String,
            default:null

        }
 	},

 	resume:{
 		filename:{
 			type:String,
 			default:null,
 		},
 		filetype:{
 	   type:String,
 		default:null
 	},
 	filesize:{
 		type:String,
 		default:null
 	},
 	url:{
 		type:String,
 		default:null
 	}

 	},
 	number:{
 		type:String,
 	},
 	email:{
 		type:String,
 		
 	},

 	education:{
 		type:String,
 	},

 	bankName:{
 		type:String,
 	},
 	account_name:{
 		type:String,
 	},
 	sort_code:{
 		type:String,

 	},
 	account_number:{
 		type:Number,
 		type:String
 	},

 	skills:{
 		type:String,
 	},
 	skill:{
 		type:String,
 		default:null
 	},
 	capibleSkills:{
 		type:String,
 	},

    password:{
        type:String,
    },
    isDeleted:{
        type:Boolean,
        default:false
    },

 	


 },
 {
 	timestamp:true
 });

//  userSchema.pre('save',async function(next){
//     try{
//    const password = await bcrypt.hash(this.password,10);
//    this.password = password;
//    next()
//     }catch(e){
//         next(e)
//     }
// });

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) { 
        throw error
    }
};
 

 module.exports = model('user',userSchema)