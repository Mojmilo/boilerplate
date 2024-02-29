import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
    <Card className={'w-full sm:w-[450px]'}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Check your email</CardTitle>
        <CardDescription>
          A sign in link has been sent to your email address.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
