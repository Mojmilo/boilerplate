import NextAuth, {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/db";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import {loginSchema} from "@/lib/definitions";
import bcrypt from 'bcrypt';

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
    throw new Error("GITHUB_ID and GITHUB_SECRET must be defined");
}

export const authConfig = {
    providers: [
        GithubProvider({
            clientId: githubId,
            clientSecret: githubSecret,
        }),
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const parsedCredentials = loginSchema.safeParse(credentials);

                await new Promise((resolve) => setTimeout(resolve, 1000));
                // return null;

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await prisma.user.findUnique({
                        where: {
                            email,
                        },
                    });
                    if (!user || !user.password) return null;
                    /*const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (passwordsMatch) return user;*/
                    return user;
                }

                return null;
            }
        }),
    ],
    /*callbacks: {
        async session({ session, user }) {
            if (user) {
                if (session.user) {
                    session.user.id = user.id;
                }
            }

            return session;
        }
    },*/
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma) as any,
} satisfies NextAuthOptions;

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }