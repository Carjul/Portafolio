import { defineEventHandler,  createError } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';


export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'projects');

  try {
    if (event.method === 'GET') {
      const skills = await collection.find({}).toArray();
      return skills;
    }


    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
    });
  } catch (error) {
    throw createError({
      statusCode:  500,
      statusMessage: 'Internal Server Error',
    });
  }
});
