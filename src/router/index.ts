import express from 'express';

import authentication from './authentication';
import form from './form';
import users from './users';
import formdata from './formdata';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  form(router);
  formdata(router);
  return router;
};
