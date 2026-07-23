"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md">

      {/* Heading */}

      <h2 className="text-5xl font-bold text-white">
        Welcome Back
      </h2>

      <p className="text-gray-400 mt-3 mb-10">
        Sign in to continue to your account
      </p>

      {/* Email */}

      <div className="mb-6">

        <label className="block text-gray-300 mb-2 text-sm">
          Email Address
        </label>

        <div className="relative">

          <Mail
            size={20}
            className="absolute left-4 top-4 text-yellow-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#1b1b1b] border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-yellow-500 transition"
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="block text-gray-300 mb-2 text-sm">
          Password
        </label>

        <div className="relative">

          <Lock
            size={20}
            className="absolute left-4 top-4 text-yellow-500"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full bg-[#1b1b1b] border border-gray-700 rounded-xl py-3 pl-12 pr-12 text-white outline-none focus:border-yellow-500 transition"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-yellow-500"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

      </div>

            {/* Remember Me & Forgot Password */}

      <div className="flex items-center justify-between mt-6 mb-8">

        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">

          <input
            type="checkbox"
            className="w-4 h-4 accent-yellow-500"
          />

          Remember me

        </label>

        <Link
          href="/forgot-password"
          className="text-sm text-yellow-500 hover:text-yellow-400"
        >
          Forgot Password?
        </Link>

      </div>

      {/* Login Button */}

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition duration-300"
      >
        Login
      </button>

      {/* Divider */}

      <div className="flex items-center my-8">

        <div className="flex-1 h-px bg-gray-700"></div>

        <span className="px-4 text-gray-400 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-700"></div>

      </div>

            {/* Google Sign In Button */}

      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 border border-gray-700 bg-[#1b1b1b] hover:bg-[#242424] text-white py-3 rounded-xl transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
          />
          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.7 15.4 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.2 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.5 16.2 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-4.1 5.5-8 5.5-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.5 16.2 44 24 44c11.1 0 20-8.9 20-20 0-1.3-.1-2.3-.4-3.5z"
          />
        </svg>

        Continue with Google
      </button>

      {/* Register */}

      <p className="text-center mt-8 text-gray-400 text-sm">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-yellow-500 hover:text-yellow-400 font-semibold"
        >
          Register
        </Link>
      </p>

    </div>
  );
}