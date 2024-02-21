import prisma from "@/lib/db";

export async function getUserByEmail(email: string) {
    try {
        return await prisma.user.findUnique({
            where: {
                email,
            },
        });
    } catch {
        return null;
    }
}