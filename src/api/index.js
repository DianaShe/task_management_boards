const express = require('express');
const { getById, create, update, remove } = require('./controllers');
export const router = express.Router();


router.route('/')
.get(getById)
.post(create)
.put(update)
.patch(update)
.delete(remove);
