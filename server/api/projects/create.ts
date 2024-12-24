import { defineEventHandler, readBody } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';

interface ProjectRequestBody {
  name: string;
  description: string;
  image: string;
  cliente: string;
  api: string;
  repositorio: string;
}

export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'projects');

  if (event.method === 'POST') {
    try {
      const data = await readBody<ProjectRequestBody>(event);
      const result = await collection.insertOne(data);
      return { message: 'Create successful', result };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
      });
    }
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
    });
  }
});
