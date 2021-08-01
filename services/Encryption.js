const { compare, hash } = require('bcryptjs');
const { NotAuthorizedError } = require('../errors');

class EncryptionService {
	static async encryptPassword (password) {
		return hash(password, 12);
	}

	static async comparePasswords (password, comparePassword) {
		const isPasswordEqual = await compare(password, comparePassword);

		if (!isPasswordEqual) {
			throw new NotAuthorizedError('Wrong password');
		}
	}
}

module.exports = EncryptionService;
