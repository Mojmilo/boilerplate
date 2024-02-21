import NextAuth from "next-auth"
import authConfig from "@/auth.config";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/db";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/auth/login",
    },
    ...authConfig,
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma) as any,
});