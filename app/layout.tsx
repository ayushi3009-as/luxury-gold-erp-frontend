import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import AppLayout from "@/components/layout/AppLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Gold ERP",
  description: "Premium Jewellery Management System",
};

import { getSession } from "@/lib/session";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppLayout userRole={session?.role}>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
// trigger rebuild
