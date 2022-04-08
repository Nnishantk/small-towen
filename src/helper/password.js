const bcrypt = require('bcrypt');

exports.hashPassword = async (password, salt) => {
	const hash = await bcrypt.hash(password, salt);
	return hash;
}