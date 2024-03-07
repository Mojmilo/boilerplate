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
import {profileSchema, ProfileSchema} from "@/schemas/profile";
import {Textarea} from "@/components/ui/textarea";
import {createProfile} from "@/actions/profile";

const ProfileForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      about: "",
      phone: "",
      country: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  })

  async function onSubmit(values: ProfileSchema) {
    startTransition(async () => {
      /*const res = await authenticateEmail(values.email);

      if (res) {
        form.setError('root', {
          type: 'manual',
          message: res,
        });
      }*/

      await createProfile(values);
    });
  }

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <span className={'text-sm font-medium text-destructive'}>{form.formState.errors.root?.message}</span>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button disabled={isPending} className="w-full">
          {isPending && <Icons.spinner className="animate-spin w-5 h-5 mr-3" />}
          Continue
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm;