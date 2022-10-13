const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/pg-management')
        .then(()=>{
            console.log('Successfully connected to DB')
        })
        .catch((err)=>{
            console.log(err.message)
        })
}

module.exports=configureDB