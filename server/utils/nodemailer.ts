import nodemailer from 'nodemailer';
const config = useRuntimeConfig()
const email = config.EMAIL!;
const password = config.PASSWORD!;
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: password
  },
  tls: {
    rejectUnauthorized: false,
  },
});


transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  }
});

export default transporter;
