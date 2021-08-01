const express = require('express');
const routes = express.Router();
const UserValidation = require('../validation/UserValidation');
const { login, signUp } = require('../controllers/auth');

routes.post('/login', UserValidation.loginValidation, login);
routes.post('/signUp', UserValidation.createValidation, signUp);

module.exports = routes;
