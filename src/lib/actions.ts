'use server';

import {LoginSchema, registerSchema, RegisterSchema} from "@/lib/definitions";
import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import {signIn, signOut} from "@/auth";
import {AuthError} from "next-auth";
import {Prisma} from ".prisma/client";

/*export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}*/

export async function authenticate(
    values: LoginSchema,
) {
    try {
        await signIn('credentials', values);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function authenticateGithub() {
    try {
        await signIn('github');
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

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

            if (!user) return 'Something went wrong.';

            await signIn('credentials', values);
        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case 'CredentialsSignin':
                        return 'Invalid credentials.';
                    default:
                        return 'Something went wrong.';
                }
            }
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                switch (error.code) {
                    case 'P2002':
                        return 'Email already taken.';
                    default:
                        return 'Something went wrong.';
                }
            }
            throw error;
        }
    }

    return 'Invalid credentials.';
}

export async function logout() {
    await signOut();
}