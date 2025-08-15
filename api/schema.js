import { Schema, model, ObjectId } from "mongoose";

const board = new Schema(
  {
    name: String,
    tasks:
      [{
        state: String,
        title: String,
        description: String,
      },]
  },
  { versionKey: false, timestamps: true }
);

export const Board = model("board", board);
