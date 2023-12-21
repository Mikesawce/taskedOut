// Purpose: Seed file for testing. Creates 2 users and 5 todos. User 1 has 3 todos. User 2 has 2 todos.
// To run this seed file, use the CLI command knex seed:run --env test
// there is an error
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(() => knex('users').del())
    .then(() => {
      // Inserts seed entries for users
      return knex('users').insert([
        { username: 'test_user', password: 'test_password' },
        { username: 'test_user2', password: 'test_password2' }
      ]);
    })
    .then(() => {
      // Inserts seed entries for todos
      // Priority defaults to 0 if not specified. 0 denotes no priority. 1 is the highest priority. 2 is medium priority. 3 is low priority.
      return knex('todos').insert([
        { title: 'test_todo', description: 'test_description', completed: false, priority: 1, user_id: 1 },
        { title: 'test_todo2', description: 'test_description2', completed: true, user_id: 2 },
        { title: 'test_todo3', description: 'test_description3', completed: false, priority: 2, user_id: 1 },
        { title: 'test_todo4', description: 'test_description4', completed: true, user_id: 2 },
        { title: 'test_todo5', description: 'test_description5', completed: false, priority: 3, user_id: 1 },
        // Feel free to add more todos here, check migration file for column names.
      ]);
    });
}
