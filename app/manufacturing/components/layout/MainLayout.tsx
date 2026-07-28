import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}