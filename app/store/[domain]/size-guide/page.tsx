"use client";

import { useState } from "react";
import { Ruler, Circle, Minus } from "lucide-react";

export default function SizeGuidePage() {
  const [activeTab, setActiveTab] = useState("rings");

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6 tracking-wide">Size Guide</h1>
        <p className="text-text-primary/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Find the perfect fit for your rings, bangles, and necklaces with our comprehensive sizing charts.
        </p>
        <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-10 opacity-50" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
        {[
          { id: "rings", label: "Ring Sizing", icon: <Circle size={18} /> },
          { id: "necklaces", label: "Necklace Lengths", icon: <Minus size={18} /> },
          { id: "bangles", label: "Bangle & Bracelet", icon: <Ruler size={18} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-8 py-4 rounded-none font-sans tracking-widest text-sm transition-all duration-300 border ${
              activeTab === tab.id
                ? "border-[#D4AF37] bg-[#D4AF37] text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                : "border-border-theme text-text-primary/70 hover:border-white/50 hover:text-text-primary bg-transparent"
            }`}
          >
            {tab.icon}
            {tab.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="relative">
        
        {/* Rings Guide */}
        {activeTab === "rings" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">How to Measure Your Ring Size</h3>
                <ul className="space-y-6 text-text-primary/70 font-sans leading-relaxed">
                  <li className="flex gap-4">
                    <span className="text-[#D4AF37] font-bold">01.</span>
                    <p>Wrap a piece of string or paper comfortably around your intended finger.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#D4AF37] font-bold">02.</span>
                    <p>Mark where the ends meet with a pen.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#D4AF37] font-bold">03.</span>
                    <p>Measure the string or paper against a ruler in millimeters to find the circumference.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#D4AF37] font-bold">04.</span>
                    <p>Compare your measurement with our chart below to find your Indian ring size.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white/[0.02] border border-border-theme rounded-2xl p-8 flex justify-center items-center h-full">
                <div className="text-center">
                  <Circle size={64} className="text-[#D4AF37] mx-auto mb-4 opacity-50 stroke-1" />
                  <p className="text-text-primary/50 text-sm font-sans italic">Pro Tip: Measure your fingers at the end of the day when they are at their largest.</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto border border-border-theme rounded-xl bg-background-tertiary">
              <table className="w-full text-left text-sm font-sans text-text-primary/70">
                <thead className="text-[#D4AF37] bg-white/[0.02] border-b border-border-theme uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">Indian Size</th>
                    <th className="px-6 py-4">US Size</th>
                    <th className="px-6 py-4">UK Size</th>
                    <th className="px-6 py-4">Circumference (mm)</th>
                    <th className="px-6 py-4">Diameter (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-theme">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">8</td>
                    <td className="px-6 py-4">4.5</td>
                    <td className="px-6 py-4">I ½</td>
                    <td className="px-6 py-4">48.0</td>
                    <td className="px-6 py-4">15.3</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">10</td>
                    <td className="px-6 py-4">5.5</td>
                    <td className="px-6 py-4">K ½</td>
                    <td className="px-6 py-4">50.0</td>
                    <td className="px-6 py-4">16.0</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">12</td>
                    <td className="px-6 py-4">6.0</td>
                    <td className="px-6 py-4">L ½</td>
                    <td className="px-6 py-4">52.0</td>
                    <td className="px-6 py-4">16.5</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">14</td>
                    <td className="px-6 py-4">7.0</td>
                    <td className="px-6 py-4">O</td>
                    <td className="px-6 py-4">54.0</td>
                    <td className="px-6 py-4">17.3</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">16</td>
                    <td className="px-6 py-4">7.5</td>
                    <td className="px-6 py-4">P</td>
                    <td className="px-6 py-4">56.0</td>
                    <td className="px-6 py-4">17.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Necklaces Guide */}
        {activeTab === "necklaces" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Necklace Length Guide</h3>
              <p className="text-text-primary/70 font-sans leading-relaxed">
                The right necklace length can highlight your features and complement your neckline perfectly. Review our standard lengths to envision where each piece will rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { length: "14 Inches", name: "Collar", desc: "Fits tightly against the neck. Best worn with open-neck clothing such as scoop necks or V-necks." },
                { length: "16 Inches", name: "Choker", desc: "Falls perfectly around the base of the neck like a collar. On a petite woman it hangs loosely around the neck." },
                { length: "18 Inches", name: "Princess", desc: "A common choice for women that sits elegantly on the collarbone." },
                { length: "20-24 Inches", name: "Matinee", desc: "Sits comfortably between the collarbone and the bust." },
                { length: "28-36 Inches", name: "Opera", desc: "Worn as a single strand falling below the bust or wrapped twice as a double choker." },
              ].map((item, idx) => (
                <div key={idx} className="border border-border-theme p-6 rounded-2xl bg-white/[0.01] hover:border-[#D4AF37]/50 transition-colors">
                  <div className="flex justify-between items-baseline mb-3">
                    <h4 className="text-xl font-serif text-text-primary">{item.length}</h4>
                    <span className="text-[#D4AF37] font-sans text-xs tracking-widest uppercase">{item.name}</span>
                  </div>
                  <p className="text-text-primary/60 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bangles Guide */}
        {activeTab === "bangles" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/[0.02] border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">How to Measure for Bangles</h3>
              <p className="text-text-primary/70 font-sans leading-relaxed mb-6">
                Bangle size is determined by the size of your hand, not your wrist. To find your perfect size:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-text-primary/70 font-sans mb-8 marker:text-[#D4AF37]">
                <li>Bring your fingers together, crossing your thumb over your pinky as if putting on a bangle.</li>
                <li>Wrap a string or paper strip around the widest part of your hand (the knuckles).</li>
                <li>Mark the string and measure the length in inches or millimeters.</li>
                <li>Compare to the chart below to find your Indian Bangle Size.</li>
              </ol>
            </div>

            <div className="overflow-x-auto border border-border-theme rounded-xl bg-background-tertiary">
              <table className="w-full text-left text-sm font-sans text-text-primary/70">
                <thead className="text-[#D4AF37] bg-white/[0.02] border-b border-border-theme uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">Bangle Size (Indian)</th>
                    <th className="px-6 py-4">Inside Diameter (Inches)</th>
                    <th className="px-6 py-4">Inside Circumference (Inches)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-theme">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">2-2</td>
                    <td className="px-6 py-4">2.125"</td>
                    <td className="px-6 py-4">6.67"</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">2-4</td>
                    <td className="px-6 py-4">2.250"</td>
                    <td className="px-6 py-4">7.06"</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">2-6</td>
                    <td className="px-6 py-4">2.375"</td>
                    <td className="px-6 py-4">7.46"</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">2-8</td>
                    <td className="px-6 py-4">2.500"</td>
                    <td className="px-6 py-4">7.85"</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">2-10</td>
                    <td className="px-6 py-4">2.625"</td>
                    <td className="px-6 py-4">8.24"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Support */}
      <div className="mt-20 text-center">
        <p className="text-text-primary/50 text-sm font-sans mb-4">Unsure about your size?</p>
        <a href="/contact" className="text-[#D4AF37] hover:text-text-primary transition-colors uppercase tracking-widest text-sm font-bold border-b border-[#D4AF37]/30 pb-1">
          Request a complimentary Ring Sizer
        </a>
      </div>
    </div>
  );
}
