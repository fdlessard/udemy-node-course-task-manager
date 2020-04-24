const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fdlessard@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Le me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fdlessard@gmail.com',
        subject: 'Sorry to see you go',
        text: `Sorry to see you go, ${name}. Le me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}