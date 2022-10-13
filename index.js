const express=require('express')
const app=express()
app.use(express.json())
const port=3050
const cors=require('cors')
app.use(cors())
const configureDB=require('./config/database')
configureDB()
const router=require('./config/routes')
app.use(router)

app.listen(port,()=>{
    console.log('App is running on port',port)
})