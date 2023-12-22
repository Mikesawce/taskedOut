const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig);

const query = (table) => {
    return db(table);
}

module.exports = query;