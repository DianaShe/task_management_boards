

const Board = require('./schema.js')



export const getBoardById = id => {
    console.log(typeof(id))
return Board.findById(id);
};

export const createBoard = ( title, description ) => {
return Board.create({ title, description });
};

export const updateBoard = (id, fields) => {
return Board.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

export const deleteBoard = id => {
    return Board.findByIdAndRemove({ _id: id });
}