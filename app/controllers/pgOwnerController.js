const PgOwner=require('../models/pgOwnerModel')

const pgOwnerController={}

pgOwnerController.list=(req,res)=>{
    PgOwner.find()
    .then((owners)=>{
        res.json(owners)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

pgOwnerController.show=(req,res)=>{
    PgOwner.findById(req.params.id)
    .then((owner)=>{
        res.json(owner)
    })
    .catch((err)=>{
        res.json(err)
    })
}

pgOwnerController.create=(req,res)=>{
    const pgowner=new PgOwner(req.body)
    pgowner.save()
    .then((owner)=>{
        res.json(owner)
    })
    .catch((err)=>{
        res.json(err)
    })
}

pgOwnerController.update=(req,res)=>{
    PgOwner.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    .then((owner)=>{
        res.json(owner)
    })
    .catch((err)=>{
        res.json(err)
    })
}

pgOwnerController.remove=(req,res)=>{
    const ack=req.ack
    const rooms=req.allRms
    const tenants=req.allTnts

    console.log('remaining rooms',rooms)
    console.log('remaining tenants',tenants)
   
    PgOwner.findByIdAndDelete(req.params.id)
    .then((owner)=>{
        const obj={ack,owner,rooms,tenants}
        res.json(obj)
    })
    .catch((err)=>{
        res.json(err)
    })
    
    
}

module.exports= pgOwnerController