import "./globals.css";
import MainSidebar from "@/components/layout/MainSidebar";
import TopBar from "@/components/layout/TopBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-[#090a09] text-white">
          <MainSidebar />
          <div className="flex-1 lg:ml-[230px] flex flex-col">
            <TopBar title="Dashboard" />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}