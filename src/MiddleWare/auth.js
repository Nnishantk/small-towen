const jwt = require("jsonwebtoken");
const {user} = require("../Models");
 
exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    console.log('entered authorization')
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRETK);
    // console.log('decrypted jwt',user);
    req.user = user.id;
    next();
  } else {
    return res.status(401).json({ message: "Authorization required" });
  }
  
};  

exports.userMiddleware = (req, res, next) => {
  // console.log(req.user);
  user.findById(req.user).exec((err,user) =>{
    if (user){
      next();
    }
    if
      (err){
        return res.status(400).json({
          message:"User access denied"
        })
    }
    
  })
};


