// db/formSubmission.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface FormSubmission {
  name?: string;
  email?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  file?: Schema.Types.Mixed;
  skills?: string[];
}

export interface FormSubmissionDocument extends FormSubmission, Document {}

const formSubmissionSchema = new Schema<FormSubmissionDocument>({
  name: String,
  email: String,
  phone: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: String,
  country: String,
  file: Schema.Types.Mixed,
  skills: [String],
});

const FormSubmissionModel = mongoose.model<FormSubmissionDocument>(
  'FormSubmission',
  formSubmissionSchema
);

export default FormSubmissionModel;

export const getAllSubmissions = async () => {
  try {
    const allSubmissions = await FormSubmissionModel.find();
    return allSubmissions;
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    throw error;
  }
};
