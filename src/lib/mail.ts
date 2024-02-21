import {Resend} from "resend";
import {EmailTemplate} from "@/components/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendVerificationEmail(email: string, token: string) {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    /*await resend.emails.send({
        from: 'Boilerplate <boilerplate@resend.dev>',
        //to: [email],
        to: ['maxime.vozelle@gmail.com'],
        subject: 'Verify your email for Boilerplate',
        text: 'Almost there! To finish verifying your email, hit the big button below.',
        react: EmailTemplate({confirmLink}),
    });*/
}