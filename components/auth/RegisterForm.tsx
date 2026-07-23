"use client";

import Link from "next/link";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full max-w-md text-white">

      <h1 className="text-5xl font-bold mb-2">
        Create Account
      </h1>

      <p className="text-gray-400 mb-10">
        Fill in the details to create your account
      </p>

      <form className="space-y-6">

        {/* Full Name */}
        <div>
          <label className="block mb-2 text-sm">
            Full Name
          </label>

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-14 rounded-xl bg-[#1B1B1B] border border-gray-700 pl-12 pr-4 outline-none focus:border-yellow-500"
            />

          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 rounded-xl bg-[#1B1B1B] border border-gray-700 pl-12 pr-4 outline-none focus:border-yellow-500"
            />

          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm">
            Phone Number
          </label>

          <div className="relative">

            <Phone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full h-14 rounded-xl bg-[#1B1B1B] border border-gray-700 pl-12 pr-4 outline-none focus:border-yellow-500"
            />

          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm">
            Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full h-14 rounded-xl bg-[#1B1B1B] border border-gray-700 pl-12 pr-12 outline-none focus:border-yellow-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2 text-sm">
            Confirm Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full h-14 rounded-xl bg-[#1B1B1B] border border-gray-700 pl-12 pr-12 outline-none focus:border-yellow-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 text-sm">

          <input
            type="checkbox"
            className="accent-yellow-500"
          />

          <span>
            I agree to the{" "}
            <span className="text-yellow-500">
              Terms & Conditions
            </span>
          </span>

        </div>

        {/* Register Button */}
        <button
          className="w-full h-14 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg hover:opacity-90 transition"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full h-14 rounded-xl border border-gray-700 hover:border-yellow-500 transition"
        >
          Register with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-400">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-yellow-500 font-semibold"
          >
            Login Now
          </Link>

        </p>

      </form>

    </div>
  );
}