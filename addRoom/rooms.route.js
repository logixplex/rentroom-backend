const express = require('express');
const { AddroomController, getRooms, getMyRooms, updateRoom } = require('./rooms.controller');
const upload = require('../storage/imageUploads');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.post("/room" , authMiddleware ,upload.array('photos', 12), AddroomController);
router.get("/room" , authMiddleware , getRooms);
router.get("/my-room" , authMiddleware , getMyRooms);
router.patch("/update-room" ,authMiddleware ,upload.array('photos', 12) , updateRoom)


module.exports = router;