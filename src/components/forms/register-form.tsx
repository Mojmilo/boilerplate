'use client';

import { Button } from '@/components/ui/button';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema, registerSchema} from "@/schemas/auth";
import {useEffect, useTransition} from "react";
import {Icons} from "@/components/icons";
import {register} from "@/actions/auth";
import zxcvbn from "zxcvbn";
import PasswordStrength from "@/components/password-strenght";

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
            const res = await register(values);

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
                <div className={'space-y-2'}>
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
                    <PasswordStrength password={form.watch('password')} />
                </div>
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