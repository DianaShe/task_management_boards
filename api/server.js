import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
const uriDb = process.env.DB_HOST;
const PORT = process.env.PORT || 3030;
import mongoose from 'mongoose';
import router from './index.js';

const app = express();
app.use(express.json());
// cors
app.use(cors());


app.use('/', router)

app.use((_, res, __) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Use api on routes: /api/tasks',
    data: 'Not found',
  })
})

app.use((err, _, res, __) => {
  console.log(err.stack)
  res.status(500).json({
    status: 'fail',
    code: 500,
    message: err.message,
    data: 'Internal Server Error',
  })
})


const connection = mongoose.connect(uriDb);

connection
.then(() => {
app.listen(PORT, function () {
console.log(`Server running. Use our API on port: ${PORT}`);
});
})
.catch(err =>
console.log(`Server not running. Error message: ${err.message}`),
);