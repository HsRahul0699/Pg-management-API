const Room=require('../models/roomsModel')

const roomController={}

roomController.list=(req,res)=>{
    Room.find()
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

roomController.show=(req,res)=>{
    Room.findById(req.params.id)
    .then((room)=>{
        res.json(room)
    })
    .catch((err)=>{
        res.json(err)
    })
}

roomController.create=(req,res)=>{
    const room=new Room(req.body)
    room.save()
    .then((room)=>{
        res.json(room)
    })
    .catch((err)=>{
        res.json(err)
    })
}

roomController.update=(req,res)=>{
    Room.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    .then((room)=>{
        res.json(room)
    })
    .catch((err)=>{
        res.json(err)
    })
}

roomController.remove=(req,res)=>{
    Room.findByIdAndDelete(req.params.id)
    .then((room)=>{
        res.json(room)
    })
    .catch((err)=>{
        res.json(err)
    })
}

roomController.getMatch=(req,res)=>{
    const id=req.params.id
    Building.find({buildingId:id})
    .then((rooms)=>{
        res.json(rooms)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports= roomController