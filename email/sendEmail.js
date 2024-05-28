const nodemailer = require('nodemailer');

const sendEmail= async (email, otp) =>{

    const transporter = await nodemailer.createTransport({
        service:'Gmail' ,
        auth: {
            user: 'arcodewar@gmail.com',
            pass: 'uxow eecd maam huqm'
        }

    })

    const mailOptions = {
        from: 'arcodewar@gmail.com',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`
    };
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent');
}

module.exports = sendEmail