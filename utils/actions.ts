'use server';

import nodemailer from 'nodemailer';
import { formSchema } from '@/lib/schema';
import { formType } from '@/app/types';

export const sendForm = async (data: formType) => {
  const formData = formSchema.safeParse(data);

  if (formData.success) {
    try {
      const { firstName, lastName, email, subject, message } = formData.data;

      const transporter: nodemailer.Transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.NODEMAILER_EMAIL_FROM,
          pass: process.env.NODEMAILER_PW,
        },
      });

      const mailOptions: nodemailer.SendMailOptions = {
        from: process.env.NODEMAILER_EMAIL_FROM,
        to: process.env.NODEMAILER_EMAIL_SEND_TO,
        subject,
        html: `<div>Name:${firstName} ${lastName}</div>
        <div> email: ${email}</div>
        <p>${message}</p>`,
      };

      const result: nodemailer.SentMessageInfo = await transporter.sendMail(
        mailOptions
      );

      return {
        emailSent: true,
        errors: [],
        result,
      };
    } catch (error) {
      return { emailSent: false, errors: [error] };
    }
  }

  if (formData.error) {
    return { emailSent: false, errors: formData.error.format() };
  }
};
