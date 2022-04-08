const jwt = require('jsonwebtoken');

const oneDay = 60*60*24;

exports.generateToken = async (userId) => {
    try{
        const token = await jwt.sign({id : userId}, process.env.JWT_SECRET, {expiresIn: oneDay});
        return token;
    } catch (error) {
        throw error;
    }
}