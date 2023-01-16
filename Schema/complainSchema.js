const express =require( 'express')
const  { Schema } = require('mongoose')
const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
    

})

const user = new mongoose.model('complains', userSchema);
module.exports=user;