import RegisterForm from "@/components/forms/register-form";
import OAuthForm from "@/components/forms/o-auth-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <RegisterForm />
        <OAuthForm />
    </main>
  );
}
