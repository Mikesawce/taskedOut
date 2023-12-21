require("dotenv").config();

module.exports = {
	client: "pg",
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		port: process.env.DB_PORT || 5432,
		database: process.env.DB_NAME,
	},
	migrations: {
        tableName: "knex_migrations",
		directory: "./db/migrations",
	},
    seeds: {
        
		directory: "./db/seeds",
	},
};
