const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    debug:true,
    secureConnection: false,
    auth: {
        user: process.env.email,
        pass: process.env.password
    },
    tls:{
        rejectUnAuthorized: true
    }
});

module.exports = transporter;