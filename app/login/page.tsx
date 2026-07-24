import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import Logo from "@/components/auth/Logo";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">

      {/* Golden Border */}
      <div className="rounded-[32px] p-[2px] bg-gradient-to-r from-[#5A4312] via-[#D4AF37] to-[#5A4312] shadow-[0_0_30px_rgba(212,175,55,0.25)]">

        {/* Main Card */}
        <div className="w-full max-w-7xl bg-[#111111] rounded-[30px] overflow-hidden grid lg:grid-cols-2">

          {/* Left Side */}
          <div className="relative hidden lg:block h-[900px] border-r border-[#2C2C2C]">

            <Image
            src="/login-bg.jpg"
            alt="Luxury Jewellery"
            fill
            priority
            className="object-cover object-[40%_center]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Logo */}
            <div className="absolute top-10 left-10 z-20">
              <Logo />
            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center bg-[#141414] p-12 lg:p-20">

            <LoginForm />

          </div>

        </div>

      </div>

    </main>
  );
}