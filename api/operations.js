import {Board} from './schema.js'

export const getBoardById = id => {
return Board.findById(id);
};

export const createBoard = ( name, tasks ) => {
return Board.create({ name, tasks });
};

export const updateBoard = (id, update) => {
return Board.findByIdAndUpdate(id, update, { new: true });
};

export const deleteBoard = id => {
    return Board.findByIdAndDelete(id);
}