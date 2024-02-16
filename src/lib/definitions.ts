import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Your password must be at least 8 characters long.",
    }),
});
export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Your password must be at least 8 characters long.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Your password must be at least 8 characters long.",
    }),
});
export type RegisterSchema = z.infer<typeof registerSchema>;