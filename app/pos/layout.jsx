"use client";

import { POSProvider } from "../../pos-billing/context/POSContext";

export default function POSLayout({ children }) {
  return <POSProvider>{children}</POSProvider>;
}
