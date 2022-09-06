import type { NextApiRequest, NextApiResponse } from 'next';
import savedFactory from '../../api/factory/SavedFactory';

const apiResponse = (req: NextApiRequest, res: NextApiResponse) => {
  savedFactory.start(req, res);
};

export default apiResponse;
