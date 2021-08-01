class DatabaseService {
	static connectTodDatabase (database) {
		return database.connect(
			// eslint-disable-next-line no-undef
			process.env.DB_CONNECT,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			},
		);
	}
}

module.exports = DatabaseService;
