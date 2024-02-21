import {currentUser} from "@/lib/auth";
import LogoutButton from "@/components/logout-button";
import Image from "next/image";

export default async function Page() {
    const user = await currentUser();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span>Dashboard</span>
            <Image src={user.image ? user.image : `https://api.dicebear.com/7.x/adventurer/svg?seed=${user.id}`} alt={'Profile picture'} width={100} height={100} className={'rounded-full'} />
            <LogoutButton />
        </main>
    );
}
