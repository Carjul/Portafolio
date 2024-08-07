import { defineEventHandler, readBody } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';

interface SkillRequestBody {
  title: string;
  image: string;
  description: string;
}

export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'skills');

  if (event.method === 'POST') {
    try {
      const data = await readBody<SkillRequestBody>(event);
      const result = await collection.insertOne(data);
      event.res.statusCode = 201; 
      return { message: 'Create successful', result };
    } catch (error) {
      console.error(error);
      event.res.statusCode = 500; 
      return { message: 'Internal Server Error', error };
    }
  } else {
    event.res.statusCode = 405; 
    return { message: 'Method Not Allowed' };
  }
});
