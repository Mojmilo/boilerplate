import {getRequiredAuthSession} from "@/auth";
import LogoutButton from "@/components/logout-button";

export default async function Page() {
    const session = await getRequiredAuthSession();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span>Dashboard</span>
            <LogoutButton />
        </main>
    );
}
