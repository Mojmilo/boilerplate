import {redirect} from "next/navigation";
import {auth} from "@/auth";
import {getProfileByUserId} from "@/data/user";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (session && session.user && await getProfileByUserId(session.user.id)) redirect("/dashboard");

  return (
    <>{children}</>
  );
}