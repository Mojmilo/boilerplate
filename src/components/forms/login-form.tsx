'use client';

import { Button } from '@/components/ui/button';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema, loginSchema} from "@/schemas/auth";
import {signIn} from "next-auth/react";
import {useTransition} from "react";
import {Icons} from "@/components/icons";
import {authenticate} from "@/actions/auth";

export default function LoginForm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: LoginSchema) {
        startTransition(async () => {
            const res = await authenticate(values);

            if (res) {
                form.setError('root', {
                    type: 'manual',
                    message: res,
                });
            }
        });
    }

    return (
        <Form {...form}>
            {form.formState.errors.root && (
                <span className={'text-sm font-medium text-destructive'}>{form.formState.errors.root?.message}</span>
            )}
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
                <Button disabled={isPending} className="w-full">
                    {isPending && <Icons.spinner className="animate-spin w-5 h-5 mr-3" />}
                    Login
                </Button>
            </form>
        </Form>
    )
}