import { ReactNode } from "react";

export default function ManufacturingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}