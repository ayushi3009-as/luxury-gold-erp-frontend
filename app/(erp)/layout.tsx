import MainSidebar from "@/components/layout/MainSidebar";
import TopBar from "@/components/layout/TopBar";

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#090a09] text-white">
      <MainSidebar />

      <div className="flex flex-1 flex-col lg:ml-[230px]">
        <TopBar title="Dashboard" />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}