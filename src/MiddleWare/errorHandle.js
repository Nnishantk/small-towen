module.exports ={
	/**
	 *
	 * @param{*}req
	 * invalid routes Handles
	 * 
	 */

	 invalidRoute(req,res,next){
	 	res.status(400).json({
	 		success:false,
	 		message:'Route Not Found'
	 	})
	 },


/**
*
*@param{*}req
* 
*/

errorHandler(error,req,res,next){
if(error.name==='ErrormongoEroor'){
	res.status(500).json({
		success:false,
		message:'Error:'+error.message
	})
}else{
	res.status(500).json({
		success:false,
		Message:'Error:'+error.message

	    })
        }
    }
}