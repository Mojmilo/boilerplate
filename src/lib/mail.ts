import { Resend } from 'resend';
import { SendVerificationRequestParams } from 'next-auth/providers';
import {EmailTemplate} from "@/components/emails/email-template";

const resend = new Resend( process.env.RESEND_API_KEY! );

export async function sendVerificationRequest(params: SendVerificationRequestParams) {
  const { identifier, url, provider, theme} = params;
  const { host } = new URL(url);

  try {
    await resend.emails.send({
      from: 'Boilerplate <boilerplate@resend.dev>',
      to: [identifier],
      subject: `Log in to ${host}`,
      react: EmailTemplate({confirmLink: url}),
    });
  } catch (error) {
    console.log({ error });
  }
}