import nodemailer from 'nodemailer';
const config = useRuntimeConfig()
const password = config.PASSWORD!;
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'emugameplay.tv@gmail.com',
    pass: password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Transporter verified:', success);
  }
});

export default transporter;
