const User = require('../models/User');
const { NotAuthorizedError } = require('../errors');

class EmailService {
	static async isEmailExist (email) {
		const isEmailExist = await User.countDocuments({ email });

		if (isEmailExist) {
			throw new NotAuthorizedError(`${email} already exist`);
		}
	}
}

module.exports = EmailService;