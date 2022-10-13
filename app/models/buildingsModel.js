
const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema
const buildingSchema=new Schema({
    ownerId:{
        type:Schema.Types.ObjectId,
        ref:'PgOwner',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    }
})

const Building=mongoose.model('Building',buildingSchema)

module.exports=Building