import {getAuthSession} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getAuthSession();

    if (session) redirect("/dashboard");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    );
}