const crypto = require('crypto');
const UserSchema = require('./models/User'); // Adjust the path according to your project structure
const nodemailer = require('nodemailer'); // For sending emails

const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if email is provided
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required',
            });
        }

        // Find user by email
        const user = await UserSchema.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(32).toString('hex');

        // Set token and expiration on the user object
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes

        await user.save();

        // Create a reset URL
        const resetUrl = `${req.protocol}://${req.get('host')}/resetPassword/${resetToken}`;
        awa
        // Send email (this is a basic example using nodemailer)
       

        res.status(200).json({
            success: true,
            message: 'Password reset link sent to email',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Failed to send forgot password email',
        });
    }
};

module.exports = forgotPasswordController;
