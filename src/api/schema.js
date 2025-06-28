const {Schema, model, ObjectId} = require('mongoose');

const board = new Schema({
  name: {
    type: String,
  },
  tasks: [ String]
//   {id: {
// type: Number,
// required: [true, 'id is required'],
// unique: true,
// },
//  title: {
// type: String,
// required: [true, 'Title is required'],
// }, 
// description: {
// type: String,
// required: [true, 'Description is required'],
// }}
},
{ versionKey: false, timestamps: true },
);

const Board = model('board', board);

module.exports = Board;