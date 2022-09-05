import connectToDatabase from './connection';

const savedModel = async () => {
  const db = await connectToDatabase();
  const res = await db.collection('saved');
  return res;
};

export default savedModel;
