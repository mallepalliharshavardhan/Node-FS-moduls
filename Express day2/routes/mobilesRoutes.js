const {getMobile,createMobile,updateMobile,deleteMobile} = require('../controller/mobileController');
const express = require('express');

const router = express.Router();

router.get("/", getMobile);

router.post("/", createMobile);

router.put("/", updateMobile);

router.delete("/", deleteMobile);

module.exports = router;