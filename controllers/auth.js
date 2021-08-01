const TokenService = require('../services/Token');
const UserService = require('../services/User');
const EncryptionService = require('../services/Encryption');
const EmailService = require('../services/Email');

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await UserService.getUser(email, password);

		await EncryptionService.comparePasswords(password, user.password);
		
		const token = TokenService.createToken(user);

		return res.status(200).json({ message: 'Login Success!', token });
	} catch(err) {
		next(err);
	}
};

exports.signUp = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		await EmailService.isEmailExist(email);

		const hashedPw = await EncryptionService.encryptPassword(password);
		const user = await UserService.createUser({ ...req.body, password: hashedPw });

		return res.status(200).json({ message: 'User created!', userId: user._id });
	} catch (err) {
		next(err);
	}
};
