const Validation = require('./Validation');
const Joi = require('joi');
const { ROLES } = require('../constants');

class UserValidation extends Validation {
	static loginValidation (req, res, next) {
		const schema = Joi.object({
			body: Joi.object({
				email: Joi.string().min(5).max(30).email().required(),
				password: Joi.string().min(5).max(1024).required(),
			}).required(),
		}).unknown(true);

		return UserValidation.validate(req, schema, next);
	}

	static createValidation (req, res, next) {
		const schema = Joi.object({
			body: Joi.object({
				name: Joi.string().min(3).max(30).required(),
				email: Joi.string().min(5).max(30).email().required(),
				password: Joi.string().min(5).max(1024).required(),
				roles: Joi.string().valid(ROLES.ADMIN, ROLES.ATTORNEY, ROLES.CLIENT).required(),
			}).required(),
		}).unknown(true);

		return UserValidation.validate(req, schema, next);
	}
}

module.exports = UserValidation;