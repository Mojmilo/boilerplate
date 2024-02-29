import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
    <Card className={'w-full sm:w-[450px]'}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Error</CardTitle>
        <CardDescription>
          Something went wrong. Please try again later.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-row justify-center items-center w-full">
          <Link href="/auth/login">
            <Button>Go back</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
