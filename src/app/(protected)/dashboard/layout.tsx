import Navbar from "@/components/navbar";
import {getProfileByUserId} from "@/data/user";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (session && session.user && !await getProfileByUserId(session.user.id)) redirect("/new-user");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      {children}
    </main>
  );
}