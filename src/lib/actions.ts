'use server';

import {registerSchema, RegisterSchema} from "@/lib/definitions";
import bcrypt from "bcrypt";
import prisma from "@/lib/db";

export async function register(values: RegisterSchema) {
    const parsedCredentials = registerSchema.safeParse(values);

    if (parsedCredentials.success) {
        const {email, password} = parsedCredentials.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                },
            });

            if (!user) return null;

            return user;
        } catch (e) {
            return null;
        }
    }

    return null;
}