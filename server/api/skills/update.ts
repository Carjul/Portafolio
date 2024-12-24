import { defineEventHandler, readBody, createError } from 'h3';
import { connect, getDatabase, getCollection } from '../../utils/mongodb';
import { ObjectId } from 'mongodb';

interface SkillRequestBody {
  _id:string;
  title: string;
  image: string;
  description: string;
}


export default defineEventHandler(async (event) => {
  const client = await connect();
  const db = await getDatabase(client);
  const collection = await getCollection(db, 'skills');

  try {
   
    if (event.method === 'PUT') {
      const body = await readBody<SkillRequestBody>(event);
      const { _id, ...updateData } = body;
      const result = await collection.updateOne({ _id: new ObjectId(_id) }, { $set: updateData });
      if (result.matchedCount === 0) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Document not found',
        });
      }
      return { message: 'Update successful' };
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
