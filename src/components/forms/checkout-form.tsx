'use client';

import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {Form} from "@/components/ui/form";
import {createPaymentIntent} from "@/actions/stripe";
import {Icons} from "@/components/icons";
import {useTransition} from "react";

const CheckoutForm = () => {
  const [isPending, startTransition] = useTransition();

  const stripe = useStripe();
  const elements = useElements();

  const form = useForm();

  const onSubmit = () => {
    startTransition(async () => {
      if (stripe == null || elements == null) {
        return;
      }

      const {error: submitError} = await elements.submit();

      if (submitError) {
        form.setError('root', {
          type: 'manual',
          message: submitError.message,
        });
        return;
      }

      const clientSecret = await createPaymentIntent(10);

      if (clientSecret == null) {
        return;
      }

      try {
        const {error} = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            return_url: window.location.origin + '/dashboard/stripe/success',
          }
        });

        if (error) {
          form.setError('root', {
            type: 'manual',
            message: error.message,
          });
        } else {
          console.log('Payment succeeded');
        }
      } catch (e) {
        console.error(e);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-5'}>
        {form.formState.errors.root && (
          <span className={'text-sm font-medium text-destructive'}>{form.formState.errors.root.message}</span>
        )}
        <PaymentElement />
        <Button type={'submit'} disabled={(!stripe || !elements) || isPending}>
          {isPending && <Icons.spinner className="animate-spin w-5 h-5 mr-3" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;