const nodemailer = require('nodemailer');

async function sendEmail (email, otp){

    const transportar = await nodemailer.createTransport({
        service:'Gmail' ,
         auth:{
            
         }

    })
}