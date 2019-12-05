const sgMail = require('@sendgrid/mail')

const sendgridApiKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'noreply@example.com',
    subject: 'Welcome to the platform',
    text: `Hi ${name}, welcome to the app.`
  })
}

module.exports = {
  sendWelcomeEmail
}
