"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Force a hard reload so the layout gets the new session cookie role
        if (data.user.role === "Sales Staff") {
          window.location.href = "/pos";
        } else if (data.user.role === "Super Admin" || data.user.role === "SUPER_ADMIN") {
          window.location.href = "/saas-admin";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const loginAsAdmin = () => {
    setEmail("admin@gold-erp.com");
    setPassword("Admin@123");
  };

  const loginAsStore = () => {
    setEmail("store@gold-erp.com");
    setPassword("Store@123");
  };

  const loginAsSales = () => {
    setEmail("sales@gold-erp.com");
    setPassword("Sales@123");
  };

  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center p-5 text-text-primary">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-gold/20 blur-[50px] rounded-full pointer-events-none" />
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Sparkles className="text-accent-gold" size={32} />
            <span className="bg-gradient-to-r from-[#f0c43c] via-[#ffe58f] to-[#d9a928] bg-clip-text text-transparent">
              Luxury Gold
            </span>
          </h1>
          <p className="mt-2 text-text-secondary tracking-widest text-sm uppercase">
            Jewellery ERP System
          </p>
        </div>

        {/* Login Box */}
        <div className="bg-background-secondary border border-border-theme rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          
          <h2 className="text-2xl font-bold mb-6 text-text-primary">Welcome Back</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-text-secondary" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background-tertiary border border-border-theme rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-accent-gold transition-colors text-text-primary"
                  placeholder="admin@gold-erp.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-text-secondary" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background-tertiary border border-border-theme rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-accent-gold transition-colors text-text-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-text-secondary">
                <input type="checkbox" className="rounded bg-background-tertiary border-border-theme text-accent-gold focus:ring-accent-gold focus:ring-offset-background-secondary" />
                Remember me
              </label>
              <a href="#" className="text-sm text-accent-gold hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-gold text-black font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex justify-center items-center gap-2 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign In to ERP"}
            </button>
          </form>

          {/* Quick Login Helpers (For Demo) */}
          <div className="mt-8 pt-6 border-t border-border-theme text-center">
            <p className="text-xs text-text-secondary mb-3">Quick Login (Demo Purposes)</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <button onClick={loginAsAdmin} type="button" className="text-xs px-3 py-1.5 rounded-full border border-border-theme bg-background-tertiary hover:border-accent-gold transition-colors text-text-secondary font-bold text-accent-gold">
                Super Admin
              </button>
              <button onClick={loginAsStore} type="button" className="text-xs px-3 py-1.5 rounded-full border border-border-theme bg-background-tertiary hover:border-accent-gold transition-colors text-text-secondary">
                Store Admin
              </button>
              <button onClick={loginAsSales} type="button" className="text-xs px-3 py-1.5 rounded-full border border-border-theme bg-background-tertiary hover:border-accent-gold transition-colors text-text-secondary">
                Sales Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}