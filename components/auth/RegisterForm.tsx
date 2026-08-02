"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, Lock, Eye, EyeOff, CheckCircle2, Loader2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    storeName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    paymentReference: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.paymentReference) {
      setError("Please enter the transaction reference ID");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setStep(3); // Success step
    } catch (err: any) {
      setError(err.message || "An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl">
      <h1 className="text-4xl font-bold text-text-primary">
        {step === 1 ? "Create Account" : step === 2 ? "Complete Payment" : "Account Pending"}
      </h1>
      
      <p className="text-text-secondary mt-3 mb-10">
        {step === 1 ? "Fill in the details to create your store account." 
         : step === 2 ? "Scan the QR code below to complete your registration fee payment."
         : "Your account is pending review by the super admin."}
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm">
          {error}
        </div>
      )}

      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div>
            <label className="block text-text-secondary mb-2">Store Name</label>
            <div className="relative">
              <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold" />
              <input
                required
                type="text"
                value={formData.storeName}
                onChange={e => setFormData({...formData, storeName: e.target.value})}
                placeholder="e.g. Sharma Jewellers"
                className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-text-secondary mb-2">Full Name</label>
            <div className="relative">
              <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold" />
              <input
                required
                type="text"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                placeholder="Enter your full name"
                className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-text-secondary mb-2">Email Address</label>
            <div className="relative">
              <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold" />
              <input
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-text-secondary mb-2">Phone Number</label>
            <div className="relative">
              <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold" />
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="Enter your phone number"
                className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-text-secondary mb-2">Password</label>
            <div className="relative">
              <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold" />
              <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                placeholder="Create password"
                className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-12 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-gold">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-text-secondary mb-2">Confirm Password</label>
            <div className="relative">
              <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold" />
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
                placeholder="Confirm password"
                className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 pl-12 pr-12 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-gold">
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full h-14 rounded-xl bg-gradient-to-r from-[#E6C35A] to-[#C79A2E] hover:brightness-110 transition-all duration-300 text-black font-semibold text-lg">
            Proceed to Payment
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Registration Fee</h3>
            <p className="text-text-secondary mb-6">Scan to pay securely via UPI</p>
            
            <div className="bg-white p-4 rounded-xl mb-4 w-64 h-64 relative">
              <Image src="/upi-qr.jpg" alt="UPI QR Code" fill className="object-contain" />
            </div>
            
            <p className="font-mono bg-background-primary px-4 py-2 rounded-lg text-accent-gold border border-gray-700">
              9712922340@barodampay
            </p>
            <p className="text-sm mt-3 text-text-secondary">MICROTECHNIQUE IT AND COMMUNICATIONS SOL</p>
          </div>

          <div>
            <label className="block text-text-secondary mb-2">UPI Transaction ID / UTR Number</label>
            <input
              required
              type="text"
              value={formData.paymentReference}
              onChange={e => setFormData({...formData, paymentReference: e.target.value})}
              placeholder="e.g. 301234567890"
              className="w-full h-14 rounded-xl bg-[#1A1A1A] border border-gray-700 px-4 text-text-primary placeholder:text-text-secondary focus:border-yellow-500 outline-none transition"
            />
            <p className="text-xs text-text-secondary mt-2">Enter the 12-digit reference number from your payment app.</p>
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={() => setStep(1)} className="w-1/3 h-14 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors text-text-primary font-semibold">
              Back
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 h-14 rounded-xl bg-gradient-to-r from-[#E6C35A] to-[#C79A2E] hover:brightness-110 transition-all duration-300 text-black font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading && <Loader2 className="animate-spin w-5 h-5" />}
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </div>

        </form>
      )}

      {step === 3 && (
        <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl p-10 flex flex-col items-center text-center">
          <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
          <h2 className="text-2xl font-bold text-text-primary mb-2">Registration Successful</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Your payment reference <span className="font-mono text-accent-gold">{formData.paymentReference}</span> has been saved. <br/><br/>
            Your account is currently <span className="text-yellow-500 font-semibold">PENDING APPROVAL</span> by the Super Admin. Once approved, your store domain will be activated and you can log in.
          </p>
          
          <Link href="/login" className="w-full block text-center h-14 leading-[56px] rounded-xl bg-gradient-to-r from-[#E6C35A] to-[#C79A2E] hover:brightness-110 transition-all duration-300 text-black font-semibold text-lg">
            Return to Login
          </Link>
        </div>
      )}

      {step === 1 && (
        <div className="mt-8 text-center">
          <span className="text-text-secondary">Already have an account?</span>
          <Link href="/login" className="ml-2 text-accent-gold hover:text-accent-gold font-semibold">
            Login Now
          </Link>
        </div>
      )}
    </div>
  );
}