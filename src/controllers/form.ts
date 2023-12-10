import express, { response, Request, Response } from 'express';
import FormSubmissionModel from '../db/formSubmission';

export const submitFormData = async (req: Request, res: Response) => {
  try {
    const formData = req.body;

    const formSubmission = await FormSubmissionModel.create(formData);

    res.status(200).json(formSubmission).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getFormDatas = async (req: Request, res: Response) => {
  try {
    const formDatas = await FormSubmissionModel.find();

    res.status(200).json(formDatas).end();
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
