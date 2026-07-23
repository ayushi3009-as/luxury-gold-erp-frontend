import Image from "next/image";
import Logo from "../../components/auth/Logo";
import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl h-[900px] bg-[#111111] border border-yellow-600/30 rounded-3xl overflow-hidden grid lg:grid-cols-[45%_55%] shadow-2xl">

        {/* Left Image */}
        <div className="relative hidden lg:block overflow-hidden">

          <Image
            src="/images/login-bg.jpg"
            alt="Jewellery"
            fill
            priority
            className="object-cover object-center scale-150 translate-x-10"
          />

          <div className="absolute inset-0 bg-black/25"></div>

          <div className="absolute top-10 left-10 z-20">
            <Logo />
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-16">

          <RegisterForm />

        </div>

      </div>
    </main>
  );
}