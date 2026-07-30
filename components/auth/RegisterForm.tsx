"use client";

import { useState } from "react";
import Link from "next/link";
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
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <div className="w-full max-w-xl">

      {/* Heading */}

      <h1 className="text-4xl font-bold text-text-primary">
        Create Account
      </h1>

      <p className="text-text-secondary mt-3 mb-10">
        Fill in the details to create your account
      </p>

      <form className="space-y-6">

        {/* Full Name */}

        <div>

          <label className="block text-text-secondary mb-2">
            Full Name
          </label>

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="block text-text-secondary mb-2">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="block text-text-secondary mb-2">
            Phone Number
          </label>

          <div className="relative">

            <Phone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="block text-text-secondary mb-2">
            Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-12 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-gold"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Confirm Password */}

        <div>

          <label className="block text-text-secondary mb-2">
            Confirm Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold"
            />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm password"
              className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-12 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-gold"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>
                {/* Terms & Conditions */}

        <div className="flex items-start gap-3">

          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-yellow-500"
          />

          <p className="text-text-secondary text-sm leading-6">

            I agree to the{" "}

            <Link
              href="#"
              className="text-accent-gold hover:underline"
            >
              Terms & Conditions
            </Link>

            {" "}and{" "}

            <Link
              href="#"
              className="text-accent-gold hover:underline"
            >
              Privacy Policy
            </Link>

          </p>

        </div>

        {/* Register Button */}

        <button
          type="submit"
          className="w-full h-14 rounded-xl bg-gradient-to-r from-[#E6C35A] to-[#C79A2E] hover:brightness-110 transition-all duration-300 text-black font-semibold text-lg"
        >
          Register
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">

          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="text-text-secondary text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-700"></div>

        </div>

        {/* Google Button */}

       <button
        type="button"
        className="w-full h-14 rounded-xl border border-gray-700 hover:border-yellow-500 hover:bg-background-tertiary transition flex items-center justify-center gap-3 text-text-primary"
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

      </form>

      {/* Login */}

      <div className="mt-8 text-center">

        <span className="text-text-secondary">
          Already have an account?
        </span>

        <Link
          href="/login"
          className="ml-2 text-accent-gold hover:text-accent-gold font-semibold"
        >
          Login Now
        </Link>

      </div>

    </div>
  );
}