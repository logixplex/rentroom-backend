const sendEmail = require("./sendEmail");
const OTPSchema = require("./otp.modal")

const sendOTPController = async (req, res) => {

    const {email} = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
        const response = await sendEmail(email, otp);
        await OTPSchema.create({email,otp})
       
       return  res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).json({ message: 'Failed to send OTP' });
    }


}


const verifyOTPController = async (req, res) => {

    const {email,otp} = req.body;

    try {
        const isAvailable = await OTPSchema.findOne({email});
        if(!isAvailable){
            return res.status(500).json({
                sucess:false,
                message : "Send OTP again."
            })
        }
        const isValid = (otp===isAvailable.otp);
        if(!isValid){
            return res.status(500).json({
                sucess:false,
                message : "Invalid OTP."
            })
        }
        
       return  res.status(200).json({ message: 'OTP Verified successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).json({ message: 'Failed to send OTP' });
    }


}

module.exports = {sendOTPController,verifyOTPController}