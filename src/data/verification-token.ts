import prisma from "@/lib/db";

export async function getVerificationTokenByToken(token: string) {
    try {
        return await prisma.verificationToken.findUnique({
            where: {
                token: token,
            }
        });
    } catch {
        return null;
    }
}

export async function getVerificationTokenByEmail(email: string) {
    try {
        return await prisma.verificationToken.findUnique({
            where: {
                email: email,
            }
        });
    } catch {
        return null;
    }
}