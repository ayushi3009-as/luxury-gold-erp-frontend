import Image from "next/image";
import RegisterForm from "@/components/auth/RegisterForm";
import Logo from "@/components/auth/Logo";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">

      <div className="w-full max-w-7xl rounded-[30px] overflow-hidden border border-[#C9A227] bg-[#111111] shadow-2xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[900px]">

          {/* Left Side */}

          <div className="relative hidden lg:block">

            <Image
              src="/login-bg.jpg"
              alt="Luxury Jewellery"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/35" />

            {/* Logo */}

            <div className="absolute top-10 left-10 z-20">
              <Logo />
            </div>

          </div>

          {/* Right Side */}

          <div className="bg-[#141414] flex items-center justify-center px-16 py-14">

            <RegisterForm />

          </div>

        </div>

      </div>

    </main>
  );
}