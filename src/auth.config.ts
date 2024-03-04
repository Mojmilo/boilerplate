import {NextAuthConfig} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { sendVerificationRequest } from "@/lib/mail";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be defined");
}

export default {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    EmailProvider({
      sendVerificationRequest,
    }),
  ],
} satisfies NextAuthConfig;