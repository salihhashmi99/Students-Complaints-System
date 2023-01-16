const express =require( 'express')
const  { Schema } = require('mongoose')
const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    con_pass:{
        type: String,
        required: true
    }
    

})

const user = new mongoose.model('datas', userSchema);
module.exports=user;