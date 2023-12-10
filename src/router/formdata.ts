import { getAllFormData } from '../controllers/formData';
import express from 'express';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/form/formData', getAllFormData);
};
