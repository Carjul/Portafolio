import { defineEventHandler, readBody } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';

interface ProjectRequestBody {
  name: string;
  description: string;
  image: string;
  url: string;
}

export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'projects');

  if (event.method === 'POST') {
    try {
      const data = await readBody<ProjectRequestBody>(event);
      const result = await collection.insertOne(data);
      event.res.statusCode = 201; // Status code for "Created"
      return { message: 'Create successful', result };
    } catch (error) {
      console.error(error);
      event.res.statusCode = 500; // Status code for "Internal Server Error"
      return { message: 'Internal Server Error', error };
    }
  } else {
    event.res.statusCode = 405; // Status code for "Method Not Allowed"
    return { message: 'Method Not Allowed' };
  }
});
