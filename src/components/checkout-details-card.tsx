'use client';

import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "@/components/forms/checkout-form";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useTheme} from "next-themes";

const CheckoutDetailsCard = () => {
  const {systemTheme} = useTheme();

  const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY as string);

  return (
    <Card className={'w-full sm:w-[450px]'}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Checkout</CardTitle>
        <CardDescription>
          Enter your payment details below to complete your purchase.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <span className={'font-medium'}>Amount : <span className={'font-semibold'}>${10}</span></span>
        <Elements stripe={stripePromise} options={{
          mode: 'payment',
          amount: 10 * 100,
          currency: 'usd',
          appearance: {
            theme: systemTheme == 'dark' ? 'night' : 'stripe',
          }
        }}>
          <CheckoutForm/>
        </Elements>
      </CardContent>
    </Card>
  )
}

export default CheckoutDetailsCard;