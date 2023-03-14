const express = require('express');
const router = express.Router();

const Service = require('./../controllers/servicesCont');
 
router
.route('/createService')
.post(Service.addService);

router
.route('/getAllServices')
.get(Service.getAllServices);

// router
// .route('/deleteService')
// .delete(Service.DeleteServices);

module.exports = router;