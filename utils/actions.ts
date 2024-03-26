'use server';

import nodemailer from 'nodemailer';
import { formSchema } from '@/lib/schema';

export const sendForm = async (data) => {
  const formData = formSchema.safeParse(data);

  if (formData.success) {
    try {
      const { firstName, lastName, email, subject, message } = formData.data;

      const transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.NODEMAILER_EMAIL_FROM,
          pass: process.env.NODEMAILER_PW,
        },
      });

      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL_FROM,
        to: process.env.NODEMAILER_EMAIL_SEND_TO,
        subject,
        html: `<div>Name:${firstName} ${lastName}</div>
        <div> email: ${email}</div>
        <p>${message}</p>`,
      };

      const result = await transporter.sendMail(mailOptions);

      return {
        error: false,
        emailSent: true,
        errors: [],
        result,
      };
    } catch (error) {
      return { error: true, emailSent: false, errors: [error] };
    }
  }

  if (formData.error) {
    return { emailSent: false, error: formData.error.format() };
  }
};
