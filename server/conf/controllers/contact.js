require('dotenv').config();

const mail_host = process.env.EMAIL_HOST || 'test';
const mail_user = process.env.EMAIL_HOST_USER || 'test';
const mail_user_pass = process.env.EMAIL_HOST_PASSWORD || 'test';
const mail_from = mail_user || 'noreplay@moby-group.com';
// const mail_to = `${mail_user},jhernandez.18p@gmail.com`;
const mail_to = `jhernandez.18p@gmail.com`;

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {

    contactEmail: function(req, res, next){
        
        const messageHTML = () => {
            const name = req.body.name;
            const email = req.body.email;
            const phone = req.body.phone;
            const subject = req.body.subject;
            const message = req.body.message;
            return `<!DOCTYPE><html><body><em>Nombre</em>: ${name} <br/><em>Email</em>: ${email} <br/><em>Teléfono</em>:${phone}<br/><em>Asunto</en>: ${subject} <br/><em>Mensaje</em>: <br/>${message}<body><html>`
        }
        
        const message = () => {
            const name = req.body.name;
            const email = req.body.email;
            const phone = req.body.phone;
            const subject = req.body.subject;
            const message = req.body.message;
            return `Nombre: ${name} \nEmail: ${email} \nTeléfono:${phone}\nAsunto: ${subject} \nMensaje: \n${message}<body><html>`
        }
        
        // console.log(message());
        // console.log('res -------------->', res.headers,'req -------------->', req.rawHeader);

        const transporter = nodemailer.createTransport(
            smtpTransport(
                {
                    service: 'Godaddy',
                    host: mail_host,
                    secure: false,
                    port: 80,
                    auth: {
                        user: mail_user,
                        pass: mail_user_pass
                    }
                }
            )
        );

        const mailOptions = {
            from: mail_from,
            to: mail_to,
            subject: 'Mensaje de contacto',
            TEXT: message(),
            html: messageHTML()
        };

        transporter.sendMail(
            mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json({ status: "error", message: error });
                } else {
                    console.log('Email sent: ' + info.response);
                    res.json({ status: "success", message: info.response });
                }
            }
        );
  
    }

}