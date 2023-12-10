import express from 'express';
import { submitFormData } from '../controllers/form';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router): void => {
  router.post('/form/submit', submitFormData);
};
