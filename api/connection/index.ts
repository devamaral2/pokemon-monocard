import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;

let cachedDb: Db | null = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  if (uri === undefined) {
    throw new Error('There is no connection with the database');
  }
  const cliente = new MongoClient(uri);
  const client = await cliente.connect();
  const db = client.db('pokemon');
  cachedDb = db;
  return db;
}

export default connectToDatabase;
