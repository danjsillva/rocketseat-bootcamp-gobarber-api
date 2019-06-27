import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // const decoded = await jwt.verify(token, authConfig.secret);
    await jwt.verify(token, authConfig.secret);

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
