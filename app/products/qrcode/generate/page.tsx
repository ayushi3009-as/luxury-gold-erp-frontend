"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import QRCodeForm from "@/components/products/QRCodeForm";

export default function EditQRCodePage() {
  const params = useParams();

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Edit QR Code
          </h1>

          <p className="text-text-secondary mt-2">
            Editing QR Code ID: {params.id}
          </p>
        </div>

        <Link
          href="/products/qrcode"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <QRCodeForm buttonText="Update QR Code" />

    </main>
  );
}