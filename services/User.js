const UserRepo = require('../repositories/user');
const { NotFoundError } = require('../errors');

class UserService {
	static async createUser(body) {
		return UserRepo.create({...body});
	}

	static async getUser(email) {
		const user = await UserRepo.getUserByEmail(email);

		if (!user) {
			throw new NotFoundError('User could not be found');
		}

		return user;
	}
}

module.exports = UserService;