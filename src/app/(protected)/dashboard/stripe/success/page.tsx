import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className={'w-full sm:w-[450px]'}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Success</CardTitle>
          <CardDescription>
            Your payment was successful.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-row justify-center items-center w-full">
            <Link href="/dashboard/stripe/checkout">
              <Button>Go back</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
