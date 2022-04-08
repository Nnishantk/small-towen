const multer  = require('multer');
const path = require('path');

var stroge = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,"src/Public/user/documents")
	},
	filename:function (req,file,cb){
		cb(null,'documents'+'-'+Date.now()+path.extname(file.originalname))
	}
})

module.exports={
	upload_documents:multer({storage:stroge }),
}