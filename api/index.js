import express from "express";
import { getById, create, update, remove } from './controllers.js';
const router = express.Router();


// router.route('/')
// .get(getById)
// .post(create)
// .put(update)
// .patch(update)
// .delete(remove);

router.get('/:id', getById)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', remove)

export default router