import {getAuthSession} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getAuthSession();

    if (!session) redirect("/login");

    return (
        <>{children}</>
    );
}