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
        signIn: "/login",
    },
    ...authConfig,
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
})

export const getAuthSession = () => {
    return auth();
}

export const getRequiredAuthSession = async () => {
    const session = await getAuthSession();

    if (!session?.user) {
        throw new Error("Not authenticated");
    }

    return session;
}