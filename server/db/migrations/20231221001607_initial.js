// Export up is used to create the tables in the database.
// The CLI command knex migrate:latest will run this function.
exports.up = function (knex) {
	return (
		knex.schema
			// Create users table with username, password, and created_at columns, all users must have a unique username.
			// There is a 15 character limit on usernames and passwords.
			.createTable("users", (table) => {
				table.increments("id").primary();
				table.string("username", 15).notNullable().unique();
				table.string("password", 15).notNullable();
				table.timestamp("created_at").defaultTo(knex.fn.now());
			})
			// Create todos table with title, description, priority, completed, user_id, and created_at columns.
			// Priority defaults to 0 if not specified. 0 denotes no priority. 1 is the highest priority. 2 is medium priority. 3 is low priority.
			// user_id is a foreign key that references the id column in the users table for data persistence.
			.createTable("todos", (table) => {
				table.increments("id").primary();
				table.string("title", 50).notNullable();
				table.string("description", 255).notNullable();
				table.integer("priority").notNullable().defaultTo(0);
				table.boolean("completed").notNullable().defaultTo(false);
				table.integer("user_id").unsigned().notNullable();
				table.foreign("user_id").references("users.id");
				table.timestamp("created_at").defaultTo(knex.fn.now());
			})
	);

	// Both tables should have a created_at column that defaults to the current time, which can be used for later sorting or lookups.
};

// Export down is used to drop the tables in the database.
// The CLI command knex migrate:rollback will run this function.
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("todos").dropTableIfExists("users");
};
