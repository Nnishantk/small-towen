const {body, validationResult} = require('express-validator')

exports.login = function(){
    return[
        body('fbToken').isString(),
    ]
}