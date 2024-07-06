import { MongoClient, Db, Collection } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB = 'Portafolio';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connect(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(MONGODB_URI);

  await client.connect();
  cachedClient = client;
  return client;
}

export async function getDatabase(client: MongoClient): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const db = client.db(MONGODB_DB);
  cachedDb = db;
  return db;
}

export async function getCollection<T>(db: Db, collectionName: string): Promise<Collection> {
  return db.collection(collectionName);
}
