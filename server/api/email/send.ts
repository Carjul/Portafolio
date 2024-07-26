import { defineEventHandler, readBody } from 'h3';
import transporter from '../../utils/nodemailer';

interface EmailRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    event.res.statusCode = 405;
    return { message: 'Method Not Allowed' };
  }

  const body = await readBody<EmailRequestBody>(event);
  
  const mailOptions = {
    from: `"Solicitud de contacto" ${body.name} <emugameplay.tv@gmail.com>`,
    to: [body.email, 'carlosrgonzales88@gmail.com'],
    subject: body.subject,
    text: body.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: 'Correo enviado exitosamente', info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error al enviar el correo', error };
  }
});
