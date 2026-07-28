import { ReactNode } from "react";
import MainLayout from "./components/layout/MainLayout";

interface ManufacturingLayoutProps {
  children: ReactNode;
}

export default function ManufacturingLayout({
  children,
}: ManufacturingLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}