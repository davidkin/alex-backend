const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const DatabaseService = require('./services/Database');

const app = express();

app.use(express.json()); // for parsing data which sending from request
app.use(express.urlencoded({ extended: true })); // for reading data from forms

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	next();
});

app.use('/api/auth', authRoutes);

app.use((err,req, res, next) => {
	const { message, status } = err;
	return res.status(status || 500).json({ error: message });
});

DatabaseService
	.connectTodDatabase(mongoose)
	.then(() => console.log('Connect to Mongoose is successfully'))
	.catch(err => console.error('Mongoose connection error:', err));

app.listen(8080);