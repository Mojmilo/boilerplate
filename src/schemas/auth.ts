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
    }).regex(/[A-Z]/, {
        message: "Your password must contain at least one uppercase letter.",
    }).regex(/[a-z]/, {
        message: "Your password must contain at least one lowercase letter.",
    }).regex(/[0-9]/, {
        message: "Your password must contain at least one number.",
    }).regex(/[!@#$%&*-]/, {
        message: "Your password must contain at least one special character.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Your password must be at least 8 characters long.",
    }),
}).refine((values) => {
    return values.password === values.confirmPassword;
}, {
    message: "Your passwords do not match.",
    path: ["confirmPassword"],
});
export type RegisterSchema = z.infer<typeof registerSchema>;