import { defineEventHandler, readBody, createError } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'skills');

  try {
    if (event.method === 'DELETE') {
      const { _id } = await readBody(event) as { _id: string };
      const result = await collection.deleteOne({ _id: new ObjectId(_id) });
      if (result.deletedCount === 0) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Document not found',
        });
      }
      return { message: 'Delete successful' };
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
