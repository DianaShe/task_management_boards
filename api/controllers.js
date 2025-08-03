import {
  createBoard,
  deleteBoard,
  getBoardById,
  updateBoard,
} from "./operations.js";

export const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await getBoardById(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { board: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    // next(e);
  }
};

export const create = async (req, res, next) => {
  const { name, tasks } = req.body;
  console.log(name, tasks);
  try {
    const result = await createBoard(name, tasks);
    if (result) {
      res.json({
        status: "success",
        code: 201,
        data: { board: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not created",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, tasks } = req.body;
  try {
    const result = await updateBoard(id, { name, tasks });

    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { board: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
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
    const result = await deleteBoard(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { board: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};
