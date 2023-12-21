exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("username", 18).unique().notNullable();
            table.string("password", 15).notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("todos", (table) => {
            table.increments("id").primary();
            table.integer("user_id").unsigned().notNullable();
            table.foreign("user_id").references("users.id");
            table.string("title", 18).notNullable();
            table.text("description", 15).notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
	};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("todos");
};
