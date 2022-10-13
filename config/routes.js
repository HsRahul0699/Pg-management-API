const express=require('express')
const router=express.Router()
const pgOwnerController=require('../app/controllers/pgOwnerController')
const buildingController=require('../app/controllers/buildingController')
const roomController=require('../app/controllers/roomController')
const tenantController=require('../app/controllers/tenantController')
const deleteBuilding=require('../app/middleware/deleteBuilding')
router.get('/api/owners',pgOwnerController.list)
router.get('/api/owners/:id',pgOwnerController.show)
router.put('/api/owners/:id',pgOwnerController.update)
router.delete('/api/owners/:id',deleteBuilding,pgOwnerController.remove)
router.post('/api/owners',pgOwnerController.create)

router.get('/api/buildings',buildingController.list)
router.get('/api/buildings/:id',buildingController.show)
router.put('/api/buildings/:id',buildingController.update)
router.delete('/api/buildings/:id',buildingController.remove)
router.post('/api/buildings',buildingController.create)

router.get('/api/rooms',roomController.list)
router.get('/api/rooms/building/:id',roomController.getMatch)
router.get('/api/rooms/:id',roomController.show)
router.put('/api/rooms/:id',roomController.update)
router.delete('/api/rooms/:id',roomController.remove)
router.post('/api/rooms',roomController.create)


router.get('/api/tenants',tenantController.list)
router.get('/api/tenants/:id',tenantController.show)
router.put('/api/tenants/:id',tenantController.update)
router.delete('/api/tenants/:id',tenantController.remove)
router.post('/api/tenants',tenantController.create)


module.exports = router
