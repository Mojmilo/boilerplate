import Navbar from "@/components/navbar";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      {children}
    </main>
  );
}