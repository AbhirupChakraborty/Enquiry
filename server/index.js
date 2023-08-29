const express = require('express');
const app = express()
app.listen(2000)


const userRouter = express.Router()
app.use('/enquiry', userRouter);