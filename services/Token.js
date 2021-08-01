const jwt = require('jsonwebtoken');

class TokenService {
	static createToken (user) {
		return jwt.sign(
			{
				userId: user.id,
				name: user.name,
				roles: user.roles,
			},
			// eslint-disable-next-line no-undef
			process.env.TOKEN_SECRET,
			{ expiresIn: '8h' }
		);
	}
}

module.exports = TokenService;