const express = require('express');
const app = express()
app.listen(2000)
const userRouter = express.Router()
app.use('/enquiry', userRouter);


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/enquirydata');
console.log('Database Connected');

const userscm = new mongoose.Schema({});
const collect = mongoose.model('enquiry', userscm, 'enquiry');

var dat=collect.find({},{ _id:0 }).then(function(data){
    console.log(data);
});