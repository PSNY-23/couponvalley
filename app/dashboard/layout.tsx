import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Footer } from "@/components/dashboard/Footer";
import { auth } from "@/auth";
import NotAuthenticatedPage from "@/components/auth/NotAuthenticated";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const  session = await auth();
    if (!session) return <NotAuthenticatedPage/>

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto bg-muted/30">{children}</main>
        <Footer />
      </div>
    </div>
  );
}