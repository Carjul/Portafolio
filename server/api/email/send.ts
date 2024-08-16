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

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #333;">Nueva solicitud de contacto</h2>
      <p style="color: #555;">Hola, has recibido un nuevo mensaje de contacto a través de tu sitio web.</p>
      <hr style="border: 0; height: 1px; background-color: #eee;">
      <p><strong>Nombre:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Asunto:</strong> ${body.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">${body.message}</p>
      <hr style="border: 0; height: 1px; background-color: #eee;">
      <p style="color: #777; font-size: 12px;">Este mensaje fue enviado automáticamente. Por favor, no respondas a este correo.</p>
    </div>
  `;

  const mailOptions = {
    from: `"Solicitud de contacto" <emugameplay.tv@gmail.com>`,
    to: [body.email, 'carlosrgonzales88@gmail.com'],
    subject: body.subject,
    text: body.message,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: 'Correo enviado exitosamente', info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error al enviar el correo', error };
  }
});
