const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ROLES } = require('../constants');

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 30,
	},
	email: {
		type: String,
		unique: true,
		index: true,
		required: true,
		minlength: 5,
		maxlength: 30,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024,
	},
	role: {
		type: String,
		default: ROLES.ATTORNEY,
		required: true,
		enum: [ROLES.ADMIN, ROLES.ATTORNEY, ROLES.CLIENT],
	},
});

module.exports = mongoose.model('User', userSchema);