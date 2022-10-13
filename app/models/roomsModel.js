
const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema
const roomSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    buildingId:{
        type:Schema.Types.ObjectId,
        ref:'Building',
        required:true
    }
})


const Room=mongoose.model('Room',roomSchema)

module.exports=Room