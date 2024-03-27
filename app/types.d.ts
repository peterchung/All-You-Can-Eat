import { boolean, object } from 'zod';

export interface FormType {
  firstName: 'string';
  lastName: 'string';
  email: 'string';
  subject: 'string';
  message: 'string';
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
