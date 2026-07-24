"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md">

      <h2 className="text-4xl font-bold text-yellow-400 mb-2">
        Welcome Back
      </h2>

      <p className="text-gray-400 mb-8">
        Login to your Luxury Gold ERP account
      </p>

      <form className="space-y-6">

        {/* Email */}

        <div>
          <label className="block text-sm mb-2 text-gray-300">
            Email Address
          </label>

          <div className="relative">

            <Mail
              className="absolute left-4 top-4 text-yellow-500"
              size={20}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl bg-[#1b1b1b] border border-gray-700 py-3 pl-12 pr-4 text-white outline-none focus:border-yellow-500"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="block text-sm mb-2 text-gray-300">
            Password
          </label>

          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-yellow-500"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-xl bg-[#1b1b1b] border border-gray-700 py-3 pl-12 pr-12 text-white outline-none focus:border-yellow-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-yellow-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-gray-300">

            <input
              type="checkbox"
              className="accent-yellow-500"
            />

            Remember Me

          </label>

          <Link
            href="#"
            className="text-yellow-400 text-sm hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <button
          className="w-full bg-yellow-500 hover:bg-yellow-400 transition rounded-xl py-3 text-black font-semibold"
        >
          Login
        </button>

      </form>

      {/* Divider */}

      <div className="flex items-center my-8">

        <div className="flex-1 h-px bg-gray-700" />

        <span className="px-4 text-gray-400 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-700" />

      </div>

      {/* Google */}

      <button
        type="button"
        className="w-full h-14 rounded-xl border border-gray-700 hover:border-yellow-500 hover:bg-[#1B1B1B] transition flex items-center justify-center gap-3 text-white"
        >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24"
    height="24"
    >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.73 1.22 9.24 3.61l6.89-6.89C35.95 2.46 30.4 0 24 0 14.64 0 6.56 5.38 2.56 13.22l8.02 6.23C12.53 13.57 17.78 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.5 24.5c0-1.57-.14-3.08-.4-4.5H24v9h12.68c-.55 2.95-2.2 5.45-4.68 7.14l7.18 5.57C43.72 37.5 46.5 31.58 46.5 24.5z"
    />
    <path
      fill="#FBBC05"
      d="M10.58 28.45A14.5 14.5 0 019.5 24c0-1.55.27-3.04.76-4.45l-8.02-6.23A23.96 23.96 0 000 24c0 3.87.93 7.53 2.56 10.68l8.02-6.23z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.4 0 11.78-2.1 15.7-5.72l-7.18-5.57c-2 1.34-4.55 2.14-8.52 2.14-6.22 0-11.47-4.07-13.42-9.95l-8.02 6.23C6.56 42.62 14.64 48 24 48z"
    />
    </svg>

     Continue with Google
    </button>

      <p className="text-center mt-8 text-gray-400">

        Don't have an account?

        <Link
          href="/register"
          className="text-yellow-400 ml-2 hover:underline"
        >
          Register
        </Link>

      </p>

    </div>
  );
}