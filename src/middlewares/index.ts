import express from 'express';
import { get, identity, merge } from 'lodash';

import { getUserSessionToken } from '../db/users';

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies.sessionToken;
    console.log('sessionToken', sessionToken);

    if (!sessionToken) {
      return res.status(403).json({ error: 'Session token not provided' });
    }

    const existingUser = await getUserSessionToken(sessionToken);

    if (!existingUser) {
      return res.status(403).json({ error: 'Invalid session token' });
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
