import Navbar from "@/app/components/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-[#0B0B0B] text-white">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6 md:p-8">
                {children}
            </main>
        </div>
    );
}