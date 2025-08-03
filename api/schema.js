import {Schema, model, ObjectId} from 'mongoose';

const board = new Schema({
  name: String,
  tasks: {
    todo: [String],
    inprogress: [String],
    done: [String],
  },
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

export const Board = model('board', board);

