export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-5">
            {children}
        </main>
    );
}