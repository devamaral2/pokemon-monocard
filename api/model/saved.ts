// eslint-disable-next-line import/extensions
import connectToDatabase from './connection';

const savedModel = async () => {
  const db = await connectToDatabase();
  return db.collection('saved');
};

export default savedModel;
