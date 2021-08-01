const express = require('express');
const routes = express.Router();
const { login, signUp } = require('../controllers/auth');

routes.post('/login', login);
routes.post('/signUp', signUp);

module.exports = routes;
