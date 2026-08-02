"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, CheckCircle } from "lucide-react";

export default function CustomOrdersPage() {
  const params = useParams();
  const domain = params.domain as string;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    vision: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.vision) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`/api/store/${domain}/custom-orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", vision: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit your request.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen text-center">
      <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-4">Bespoke Services</p>
      <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">Custom Orders</h1>
      <p className="text-text-primary/60 mb-16 text-lg font-light leading-relaxed">
        Work directly with our master designers to create a one-of-a-kind masterpiece that perfectly captures your unique vision and legacy.
      </p>

      <div className="bg-[#111]/50 border border-border-theme p-8 md:p-12 text-left relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-16 animate-in fade-in zoom-in duration-500">
            <CheckCircle className="text-[#D4AF37] w-16 h-16 mb-6" />
            <h3 className="text-3xl font-serif text-text-primary mb-4">Request Received</h3>
            <p className="text-text-primary/70 text-center font-sans max-w-md leading-relaxed">
              Thank you for choosing Luxury Gold. Our concierge will review your vision and contact you within 24 hours to schedule your private consultation.
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 border border-border-theme text-text-primary/70 hover:text-text-primary px-8 py-3 text-sm tracking-widest uppercase transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10">
            <h3 className="text-2xl font-serif text-text-primary mb-8">Request a Consultation</h3>
            
            {status === "error" && (
              <div className="mb-6 p-4 border border-red-500/20 bg-red-500/10 text-red-500 text-sm font-sans rounded">
                {errorMessage}
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only">First Name</label>
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-transparent border-b border-border-theme p-3 text-text-primary focus:border-[#D4AF37] outline-none font-sans transition-colors placeholder:text-text-primary/30" 
                  />
                </div>
                <div>
                  <label className="sr-only">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-transparent border-b border-border-theme p-3 text-text-primary focus:border-[#D4AF37] outline-none font-sans transition-colors placeholder:text-text-primary/30" 
                  />
                </div>
              </div>
              <div>
                <label className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-border-theme p-3 text-text-primary focus:border-[#D4AF37] outline-none font-sans transition-colors placeholder:text-text-primary/30" 
                />
              </div>
              <div>
                <label className="sr-only">Your Vision</label>
                <textarea 
                  placeholder="Describe your vision (e.g. Engagement ring, heirloom redesign)... *" 
                  required
                  rows={4} 
                  value={formData.vision}
                  onChange={(e) => setFormData({...formData, vision: e.target.value})}
                  className="w-full bg-transparent border-b border-border-theme p-3 text-text-primary focus:border-[#D4AF37] outline-none resize-none font-sans transition-colors placeholder:text-text-primary/30"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full border border-[#D4AF37] text-[#D4AF37] py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500 flex justify-center items-center gap-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
