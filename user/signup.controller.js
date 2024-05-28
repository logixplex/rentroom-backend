const  sendEmail  = require("../email/sendEmail");
const Users = require("./user.modal");
const bcrypt = require("bcryptjs")

const SignupController = async (req, res) => {
    const { name, email, phone, password, userType } = req.body;

    try {
        const isUser = await Users.findOne({ email })

        if (isUser) {
            return res.status(400).send({
                success: false,
                message: "User already registered."
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new Users({
            name,
            email,
            phone,
            password: hashedPassword,
            userType
        });

       
        const response = await Users.create(newUser);
        return res.status(201).send({
            message: true,
            data: newUser,
            message: "User Registered Successfully."
        })
    }
    catch (err) {
        return res.status(500).send({
            success: false,
            message: "Failed to Register User."
        })
    }
}

module.exports = SignupController