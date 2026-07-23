import Image from "next/image";
import LoginForm from "../../components/auth/LoginForm";
import Logo from "../../components/auth/Logo";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-5">
      <div className="w-full max-w-7xl h-[900px] rounded-3xl overflow-hidden border border-yellow-600/30 bg-[#111111] grid lg:grid-cols-2 shadow-2xl">

        {/* Left Side */}
    <div className="relative hidden lg:block overflow-hidden">

        <Image
        src="/images/login-bg.jpg"
        alt="Luxury Jewellery"
        fill
        priority
        className="
        object-cover
        object-center
        scale-125
        translate-x-20
        "
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-10 left-10 z-10">
        <Logo />
    </div>

    </div>

        {/* Right Side */}

        <div className="flex items-center justify-center px-14">

          <LoginForm />

        </div>

      </div>
    </main>
  );
}