exports.up = function (knex) {
	return knex.schema.createTable("todos", (table) => {
		table.increments("id").primary();
		table.string("title", 18).notNullable();
		table.text("description", 15).notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("todos");
};
