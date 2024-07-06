import { defineEventHandler, readBody, createError, send } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';

export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'skills');

  if (event.method === 'POST') {
    try {
      const data = await readBody(event);
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
