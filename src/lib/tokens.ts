import prisma from "@/lib/db";
import {getVerificationTokenByEmail} from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";

export async function generateVerificationToken(email: string) {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        await prisma.verificationToken.delete({
            where: {
                email: email,
            }
        });
    }

    return prisma.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    });
}