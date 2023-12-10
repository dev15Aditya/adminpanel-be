import express from 'express';

import { getAllSubmissions } from '../db/formSubmission';

export const getAllFormData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const formData = await getAllSubmissions();

    return res.status(200).json(formData);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
