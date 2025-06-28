import { createBoard, deleteBoard, getBoardById, updateBoard } from "./operations";


export const getById = async (req, res, next) => {
console.log(req)
try {
const result = await getBoardById(req);
if (result) {
res.json({
status: 'success',
code: 200,
data: { task: result },
});
} else {
res.status(404).json({
status: 'error',
code: 404,
message: `Not found task id: `,
data: 'Not Found',
});
}
} catch (e) {
console.error(e);
// next(e);
}
};

export const create = async (req, res, next) => {
try {
const result = await createBoard(req);
if (result) {
res.json({
status: 'success',
code: 201,
data: { board: result },
});
} else {
res.status(404).json({
status: 'error',
code: 404,
message: "Not created",
});
}
} catch (e) {
console.error(e);
}
};

export const update = async (req, res, next) => {
    const { id, update } = req.params;
    try {
const result = await getBoardById(id);
if (result) {
    const updatedBoard = await updateBoard(result, update)
res.json({
status: 'success',
code: 200,
data: { board: updatedBoard },
});
} else {
res.status(404).json({
status: 'error',
code: 404,
message: `Not found task id: ${id}`,
data: 'Not Found',
});
}
} catch (e) {
console.error(e);
next(e);
}
};

export const remove = async (req, res, next) => {
    const { id } = req.params;
    try {
const result = await getBoardById(id);
if (result) {
    const deletedBoard = await deleteBoard(result)
res.json({
status: 'success',
code: 200,
data: { board: deletedBoard },
});
} else {
res.status(404).json({
status: 'error',
code: 404,
message: `Not found task id: ${id}`,
data: 'Not Found',
});
}
} catch (e) {
console.error(e);
next(e);
}
};

