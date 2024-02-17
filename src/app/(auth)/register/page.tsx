import RegisterForm from "@/components/forms/register-form";
import OAuthForm from "@/components/forms/o-auth-form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import LoginForm from "@/components/forms/login-form";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
      <Card className={'w-[450px]'}>
          <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                  Enter your email below to create your account.
              </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
              <OAuthForm />
              <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
                  </div>
              </div>
              <RegisterForm />
          </CardContent>
          <CardFooter>
              <div className="flex flex-row justify-center items-center w-full">
                  <Link href="/login">
                      <Button variant="link" className="h-0 px-0 py-0 text-sm text-muted-foreground font-light">
                          Already have an account?
                      </Button>
                  </Link>
              </div>
          </CardFooter>
      </Card>
  );
}
