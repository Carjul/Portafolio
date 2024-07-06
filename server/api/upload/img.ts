import { v2 as cloudinary } from 'cloudinary';
import { defineEventHandler, readBody, createError } from 'h3';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});


export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    event.res.statusCode = 405;
    return { message: 'Method Not Allowed' };
  }

  try {
    const body = await readBody(event);
    const { imageBase64, fileName } = body;

    if (!imageBase64) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request: imageBase64 is required',
      });
    }

    

     // Utiliza cloudinary.uploader.upload_base64() para cargar desde base64
     const uploadResult = await cloudinary.uploader.upload_url(imageBase64)
    console.log({url: uploadResult.secure_url})
      
      return {
      message: 'Upload successful',

    };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});