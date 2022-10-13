const Tenant=require('../models/tenants')

const tenantController={}

tenantController.list=(req,res)=>{
    Tenant.find()
    .then((tenants)=>{
        res.json(tenants)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

tenantController.show=(req,res)=>{
    Tenant.findById(req.params.id)
    .then((tenant)=>{
        res.json(tenant)
    })
    .catch((err)=>{
        res.json(err)
    })
}

tenantController.create=(req,res)=>{
    const tenant=new Tenant(req.body)
    tenant.save()
    .then((tenant)=>{
        res.json(tenant)
    })
    .catch((err)=>{
        res.json(err)
    })
}

tenantController.update=(req,res)=>{
    Tenant.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    .then((tenant)=>{
        res.json(tenant)
    })
    .catch((err)=>{
        res.json(err)
    })
}

tenantController.remove=(req,res)=>{
    Tenant.findByIdAndDelete(req.params.id)
    .then((tenant)=>{
        res.json(tenant)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports= tenantController