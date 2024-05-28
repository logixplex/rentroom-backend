const Users = require("./user.modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const LoginController = async (req, res) => {
    const { email, password } = req.body;
    const secret_key = process.env.JWT_SECRET_KEY;

    try {
        const isUser = await Users.findOne({ email });

        if (!isUser) {
            return res.status(400).json({
                success: false,
                message: "User Not found, Signup Please."
            })
        }
        const ismatched = await bcrypt.compare(password, isUser.password)

        if (!ismatched) {
            return res.status(500).json({
                success: false,
                message: "Invalid Credentials."
            })
        }
        const token = jwt.sign({ userId: isUser._id }, "CFVGYBH43567B@#$%^&HBV$%&*457&$%YTFDFJ", { expiresIn: '24h' });
       
        const userData = {
            name: isUser.name,
            email: isUser.email,
            phone: isUser.phone,
            userType: isUser.userType,
            token: token
        }
        return res.status(200).json({
            success: true,
            userData: userData,
            message: "Login Successfully."
        });

    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to Login."
        })
    }
}


module.exports = LoginController