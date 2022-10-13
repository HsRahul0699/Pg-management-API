const express=require('express')
const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema
const pgOwnerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'Enter valid Email ID'
            }
        }
    }
})

const PgOwner=mongoose.model('PgOwner',pgOwnerSchema)

module.exports=PgOwner