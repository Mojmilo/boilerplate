'use client';

import { Button } from '@/components/ui/button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {EmailSchema, emailSchema} from "@/schemas/auth";
import {useTransition} from "react";
import {Icons} from "@/components/icons";
import {authenticateEmail} from "@/actions/auth";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: EmailSchema) {
    startTransition(async () => {
      const res = await authenticateEmail(values.email);

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
        <Button disabled={isPending} className="w-full">
          {isPending && <Icons.spinner className="animate-spin w-5 h-5 mr-3" />}
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm;