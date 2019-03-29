const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c9ddb14a416ca9e8a6e0a7a'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c9ddb14a416ca9e8a6e0a7a').then((todo) => {
    console.log(todo);
});