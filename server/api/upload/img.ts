
import { defineEventHandler, readBody, createError } from 'h3';



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