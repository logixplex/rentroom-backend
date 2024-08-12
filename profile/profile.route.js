const express = require('express');

const router = express.Router();


router.patch("/update-profile" , updateProfileController)

module.exports = router