
import nodemailer from 'nodemailer';
const password = process.env.PASSWORD!;
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
    auth: {
    user: 'emugameplay.tv@gmail.com',
    pass: password, 
  },
  tls: {
    rejectUnauthorized: false
}
});

/* transporter.verify().then(()=>{
  console.log("listo para enviar emails");
}) */

export default transporter;
