const { ValidationError } = require('../errors');

class Validation {
	static validate (req, schema, next) {
		const { error } = schema.validate(req);

		if (error) {
			throw new ValidationError(error.details[0].message);
		}

		return next();
	}
}

module.exports = Validation;
