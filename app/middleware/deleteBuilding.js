const buildings=require('../models/buildingsModel')
const rooms=require('../models/roomsModel')
const tenants=require('../models/tenants')

const deleteBuilding=(req,res,next)=>{
    const owner=req.params.id
    buildings.find({ownerID:owner})
        .then((blds)=>{
            const buildIds=blds.map((ele)=>{return ele._id})
            rooms.find({buildingId:{$in:buildIds}})
                .then((rms)=>{
                    const roomIds=rms.map((ele)=>{return ele._id})
                    tenants.deleteMany({roomId:{$in:roomIds}})
                        .then((res)=>{

                            if(res.acknowledged===true){
                                tenants.find()
                                .then((allTenants)=>{
                                    const allTnts=allTenants
                                    rooms.deleteMany({buildingId:{$in:buildIds}})
                                        .then((res)=>{
                                            if(res.acknowledged===true){
                                                rooms.find()
                                                    .then((rms)=>{
                                                        const allRms=rms
                                                        console.log('Line before deleting, owner id',owner)
                                                        buildings.deleteMany({ownerID:owner})
                                                            .then((acknowledge)=>{
                                                            if(res.acknowledged===true){
                                                                console.log('deleted buildings')
                                                                req.ack=acknowledge
                                                                req.allTnts=allTnts
                                                                req.allRms=allRms
                                                                next()
                                                            }
                                                        })
                                                            .catch((err)=>{
                                                            console.log('buildings delete error',err.message)
                                                        })
                                                    })
                                            }
                                        })
                                })
                               /*  console.log('deleted tenants')
                                rooms.deleteMany({buildingId:{$in:buildIds}})
                                    .then((res)=>{
                                        if(res.acknowledged===true){
                                        
                                            console.log('deleted rooms')
                                            buildings.deleteMany({ownerID:owner})
                                                .then((acknowledge)=>{
                                                    if(res.acknowledged===true){
                                                        console.log('deleted buildings')
                                                        req.ack=acknowledge
                                                        next()
                                                    }
                                                })
                                                .catch((err)=>{
                                                    console.log('buildings delete error',err.message)
                                                })
                                        }
                                    })
                                    .catch((err)=>{
                                        console.log('rooms delete error',err.message)
                                    }) */
                            }
                        })
                        .catch((err)=>{
                            console.log('tenants delete error',err.message)
                        })
                })
                .catch((err)=>{
                    console.log('rooms find error',err.message)
                })
        })
        .catch((err)=>{
            console.log('buildings find error',err.message)
        })
    /* console.log('owner Id',owner)
    buildings.deleteMany({ownerId:owner})
        .then((acknowledge)=>{
            req.ack=acknowledge
            console.log('ack',acknowledge)
            next()
        })
        .catch((err)=>{
            console.log(err.message)
        })
     buildings.find({ownerID:owner}) 
        .then((bulngs)=>{
            console.log('These are the matched buildings',bulngs)
            const buildIds=bulngs.map((ele)=>{return ele._id})
            console.log(buildIds[0])
            req.buildingIds=buildIds
            next()
            rooms.deleteMany({buildingId:{$in:buildIds}})
            .then((out)=>{
                console.log('out',out)
            })
            .catch((err)=>{
                console.log(err)
            }) 
            const n=bulngs.map((ele)=>{return ele._id})
           console.log('n',n)
        }) */
        
}

module.exports=deleteBuilding