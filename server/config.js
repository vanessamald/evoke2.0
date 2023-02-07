const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: process.env.MAIL_PORT,
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
        //ciphers: 'SSLv3'
    }
});

module.exports = transporter;