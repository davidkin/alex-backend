const User = require('../models/User');

class UserRepo {
	static async create(data) {
		const user = new User(data);
		return user.save();
	}

	static async getUserByEmail(email) {
		return User.findOne({ email });
	}
}

module.exports = UserRepo;