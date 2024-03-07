import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ProfileForm from "@/components/forms/profile-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5">
      <Card className={'w-full sm:w-[450px]'}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">New user</CardTitle>
          <CardDescription>
            Welcome to the app! Please fill out your profile to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ProfileForm />
        </CardContent>
      </Card>
    </main>
  );
}
