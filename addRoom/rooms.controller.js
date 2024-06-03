const Rooms = require("./addRoom.modal")
const jwt = require('jsonwebtoken');

const AddroomController = async (req, res) => {
    const data = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    const userId = decodedToken.userId;

    try {
        const images = req.files.map(file => ({
            url: `/uploads/${file.filename}`,
        }));

        const newEntry = {
            ...data,
            createdBy: userId,
            images,

        };
        const response = await Rooms.create(newEntry)
        return res.status(201).json({
            success: true,
            data: response,
            message: "Room Added Successfully."
        })
    }
    catch (err) {
        return res.status(500).json({
            success: "false",
            error: err,
            message: "Failed to add Room."
        })
    }
}

const getRooms = async (req, res) => {

    const { id } = req.query;

    try {
        let rooms;
        if (id) {
            // Fetch the specific room by ID
            rooms = await Rooms.findById({ _id: id });
            if (!rooms) {
                return res.status(404).json({
                    success: false,
                    message: "Room not found."
                });
            }
        } else {
            // Fetch all rooms
            rooms = await Rooms.find();
        }


        return res.status(200).json({
            success: true,
            data: rooms,
            message: "Get All Rooms."
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to get all rooms.",
            error: err
        })
    }
}

const getMyRooms = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    const userId = decodedToken.userId;


    try {
        const response = await Rooms.find({ createdBy: userId })
        if (!response) {
            return res.status(400).json({
                success: false,
                message: "Failed to Get My Roomsd."
            })
        }

        return res.status(200).json({
            success: true,
            data: response,
            message: "Got My Rooms Successfully."
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err,
            message: "Failed to Get My Rooms."
        })
    }
}

const updateRoom = async (req, res) => {
    const data = req.body
    const { id } = req.query;
    try {
        const response = await Rooms.findByIdAndUpdate({ _id, id }, { data }, { new: true })

        if (!response) {
            return res.status(400).json({
                success: false,
                message: "Failed to Update Room."
            })
        }
        return res.status(400).json({
            success: true,
            message: "Room Updated Successfully."
        })
        
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err,
            message: "Failed to Update Room."
        })
    }
}
module.exports = { AddroomController, getRooms, getMyRooms, updateRoom }