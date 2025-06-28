const express = require('express');
const cors = require('cors');
require('dotenv').config();
const uriDb = process.env.DB_HOST;
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { router } = require('.');

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


const connection = mongoose.connect(uriDb, {
promiseLibrary: global.Promise,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false,
});
connection
.then(() => {
app.listen(PORT, function () {
console.log(`Server running. Use our API on port: ${PORT}`);
});
})
.catch(err =>
console.log(`Server not running. Error message: ${err.message}`),
);