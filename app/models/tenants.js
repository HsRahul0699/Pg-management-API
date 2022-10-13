const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema

const tenantsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    aadhar:{
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
    },
    roomId:{
        type:Schema.Types.ObjectId,
        ref:'Room',
        required:true
    },
    buildingId:{
        type:Schema.Types.ObjectId,
        ref:'Building',
        required:true
    }
})

const Tenant=mongoose.model('Tenant',tenantsSchema)

module.exports=Tenant
