import LoginForm from "@/components/forms/login-form";
import OAuthForm from "@/components/forms/o-auth-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginForm />
        <OAuthForm />
    </main>
  );
}
