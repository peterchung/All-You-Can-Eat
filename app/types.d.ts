import { boolean, object } from 'zod';

export interface FormType {
  firstName: 'string';
  lastName: 'string';
  email: 'string';
  subject: 'string';
  message: 'string';
}

export interface simplifiedProduct {
  _id: string;
  price: number;
  name: string;
  slug: string;
  imageUrl: string;
}

export interface fullProduct {
  _id: string;
  price: number;
  name: string;
  slug: string;
  images: any;
  description: string;
  price_id: string;
}

export interface imageAppProps {
  images: any;
}

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export interface menuModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

// export interface FormResultError {
//   emailSent: boolean;
//   errors: ValidationErrors;
// }

// interface ValidationErrors {
//   [key: string]: ValidationErrorDetails;
// }

// interface ValidationErrorDetails {
//   _errors: string[];
// }

// export interface FormResultSucess {
//   emailSent: boolean;
//   result: object;
// }
