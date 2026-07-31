import { Sparkles, Gem, Shield, Droplets } from "lucide-react";

export default function CarePage() {
  const careSections = [
    {
      id: "gold",
      title: "Gold & Platinum Care",
      icon: <Shield className="text-[#D4AF37] w-8 h-8 mb-4" />,
      description: "Gold and platinum are precious metals that require gentle maintenance to preserve their lustrous finish and prevent micro-scratches.",
      tips: [
        "Store each piece individually in soft cloth pouches to prevent scratching.",
        "Remove rings and bracelets during heavy physical work or when handling harsh chemicals.",
        "Clean gently using warm water and a few drops of mild, non-detergent soap.",
        "Use a soft-bristled baby toothbrush to gently remove daily build-up, then pat dry."
      ]
    },
    {
      id: "diamonds",
      title: "Diamond Maintenance",
      icon: <Gem className="text-[#D4AF37] w-8 h-8 mb-4" />,
      description: "While diamonds are the hardest known natural material, they can still chip under heavy impact and lose their brilliance from daily oils.",
      tips: [
        "Soak in a gentle degreasing solution (like water with a few drops of dish soap) once a week.",
        "Avoid wearing diamond rings while applying lotions, sunscreens, or hairspray.",
        "Have the prongs and mountings inspected by our master jewelers annually.",
        "Do not store diamonds together; they can scratch other diamonds and softer gems."
      ]
    },
    {
      id: "gemstones",
      title: "Precious Gemstones",
      icon: <Sparkles className="text-[#D4AF37] w-8 h-8 mb-4" />,
      description: "Emeralds, rubies, sapphires, and pearls each have unique properties and varying degrees of hardness, requiring specific care.",
      tips: [
        "Never use ultrasonic cleaners on emeralds, pearls, or opals.",
        "Wipe pearls with a soft damp cloth immediately after wearing to remove body oils.",
        "Protect colored gemstones from prolonged exposure to direct sunlight, which can fade them.",
        "Have pearls professionally re-strung every 1-2 years if worn frequently."
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide">Jewellery Care</h1>
        <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Learn how to preserve the brilliance, integrity, and legacy of your Luxury Gold masterpieces for generations to come.
        </p>
        <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-10 opacity-50" />
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <p className="text-white/80 font-serif text-xl leading-relaxed italic">
          "A masterpiece of jewellery is not merely worn; it is curated. Proper care ensures that the light caught within your diamonds today will shine just as brilliantly for your descendants tomorrow."
        </p>
      </div>

      {/* Care Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">
        {careSections.map((section, idx) => (
          <div 
            key={section.id} 
            className="group relative border border-white/10 p-8 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 overflow-hidden"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {section.icon}
              <h3 className="text-2xl font-serif text-white mb-4 tracking-wide">{section.title}</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed mb-8">
                {section.description}
              </p>
              <ul className="space-y-4">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <Droplets className="text-[#D4AF37] w-4 h-4 mt-1 mr-3 flex-shrink-0 opacity-70" />
                    <span className="text-white/70 font-sans text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Services */}
      <div className="relative border border-[#D4AF37]/20 rounded-3xl p-10 md:p-16 overflow-hidden bg-gradient-to-br from-[#111] to-[#0a0a0a]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Complimentary Spa Services</h2>
            <p className="text-white/70 font-sans leading-relaxed mb-6">
              As part of the Luxury Gold experience, we invite our exclusive clientele to bring their pieces to any of our boutiques for a complimentary ultrasonic cleaning, prong inspection, and professional polishing.
            </p>
            <ul className="space-y-2 text-white/50 text-sm font-sans mb-8">
              <li>• Deep ultrasonic cleaning</li>
              <li>• Diamond and gemstone setting check</li>
              <li>• Platinum and gold polishing</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact" className="inline-block bg-[#D4AF37] text-black font-bold font-sans tracking-wide px-10 py-4 hover:bg-white transition-colors duration-300">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
