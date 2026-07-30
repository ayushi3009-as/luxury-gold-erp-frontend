"use client";

import { useState, useActionState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { loginAction } from "@/app/actions/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="w-full max-w-md">
      <h2 className="text-4xl font-bold text-accent-gold mb-2">Welcome Back</h2>
      <p className="text-text-secondary mb-8">Login to your Luxury Gold ERP account</p>

      {state?.error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm">
          <AlertCircle size={18} />
          <span>{state.error}</span>
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div>
          <label className="block text-sm mb-2 text-text-secondary">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-accent-gold" size={20} />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl bg-background-secondary border border-border-theme py-3 pl-12 pr-4 text-text-primary outline-none focus:border-accent-gold"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-text-secondary">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-accent-gold" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-xl bg-background-secondary border border-border-theme py-3 pl-12 pr-12 text-text-primary outline-none focus:border-accent-gold"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-accent-gold"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          disabled={isPending}
          className="w-full bg-accent-gold hover:bg-accent-gold-hover transition rounded-xl py-3 text-text-primary dark:text-black font-semibold disabled:opacity-70 flex justify-center items-center"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}