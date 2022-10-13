const Building=require('../models/buildingsModel')

const buildingController={}

buildingController.list=(req,res)=>{
    Building.find()
    .then((buildings)=>{
        res.json(buildings)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

buildingController.show=(req,res)=>{
    Building.findById(req.params.id)
    .then((building)=>{
        res.json(building)
    })
    .catch((err)=>{
        res.json(err)
    })
}

buildingController.create=(req,res)=>{
    const building=new Building(req.body)
    building.save()
    .then((building)=>{
        res.json(building)
    })
    .catch((err)=>{
        res.json(err)
    })
}

buildingController.update=(req,res)=>{
    Building.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    .then((building)=>{
        res.json(building)
    })
    .catch((err)=>{
        res.json(err)
    })
}

buildingController.remove=(req,res)=>{
    console.log('removing building')
    Building.findByIdAndDelete(req.params.id)
    .then((building)=>{
        res.json(building)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports= buildingController