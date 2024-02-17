'use client';

import { Button } from '@/components/ui/button';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema, registerSchema} from "@/lib/definitions";
import {useTransition} from "react";
import {Icons} from "@/components/icons";
import {signIn} from "next-auth/react";
import {register} from "@/lib/actions";

export default function RegisterForm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values: RegisterSchema) {
        startTransition(async () => {
            const user = await register(values);

            if (user) {
                await signIn('credentials', {
                    email: values.email,
                    password: values.password,
                });
            }
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type={'password'} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm password</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type={'password'} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} className="w-full">
                    {isPending && <Icons.spinner className="animate-spin w-5 h-5 mr-3" />}
                    Create account
                </Button>
            </form>
        </Form>
    )
}