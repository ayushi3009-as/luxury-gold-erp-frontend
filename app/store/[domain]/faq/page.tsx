"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <h3 className={`text-lg md:text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#D4AF37]'}`}>
          {question}
        </h3>
        <span className="ml-6 flex-shrink-0 text-white/50 group-hover:text-[#D4AF37] transition-colors duration-300">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-white/60 font-sans leading-relaxed text-sm md:text-base pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Purchasing & Orders",
      items: [
        {
          question: "How do I ensure the authenticity of my purchase?",
          answer: "Every piece of Luxury Gold jewellery is accompanied by a Certificate of Authenticity. Our diamonds are GIA certified, and all gold pieces carry the standard hallmark certifying their purity. We guarantee the provenance and quality of every item."
        },
        {
          question: "Can I customize or modify an existing design?",
          answer: "Yes, we offer bespoke customization services. Our master artisans can modify existing designs or create an entirely new piece based on your vision. Please contact our concierge to schedule a private consultation."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept all major premium credit cards, bank wire transfers, and select cryptocurrency payments for VIP clients. All transactions are securely processed with military-grade encryption."
        }
      ]
    },
    {
      category: "Shipping & Returns",
      items: [
        {
          question: "How is my jewellery shipped securely?",
          answer: "All orders are shipped via insured, overnight courier services in discreet packaging. For high-value items, we offer white-glove personal delivery services by our security personnel in select major cities worldwide."
        },
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day complimentary return or exchange policy on all standard pieces, provided they are unworn and in their original pristine condition with all certificates intact. Custom and bespoke pieces are final sale."
        }
      ]
    },
    {
      category: "Care & Maintenance",
      items: [
        {
          question: "How should I care for my diamond pieces?",
          answer: "We recommend professional cleaning every six months. For daily care, use a soft, lint-free cloth. Avoid exposing your diamonds to harsh chemicals, perfumes, or extreme temperature changes. Complimentary professional cleaning is available at all our boutiques."
        },
        {
          question: "Do you offer a warranty on your jewellery?",
          answer: "Yes, all Luxury Gold pieces come with a lifetime warranty against manufacturing defects. This warranty does not cover normal wear and tear, accidental damage, or modifications made by third-party jewelers."
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#D4AF37]/10 blur-[60px] rounded-full pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide">FAQ</h1>
        <p className="text-white/60 text-lg md:text-xl font-light">Answers to your most frequently asked questions.</p>
        <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 opacity-50" />
      </div>

      {/* FAQ Sections */}
      <div className="space-y-16">
        {faqs.map((section, sIdx) => (
          <div key={sIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${sIdx * 150}ms` }}>
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-6">
              {section.category}
            </h2>
            <div className="border-t border-white/10">
              {section.items.map((item, iIdx) => {
                const globalIndex = sIdx * 10 + iIdx; // simple unique index
                return (
                  <FAQItem
                    key={iIdx}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === globalIndex}
                    onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support Footer */}
      <div className="mt-24 text-center border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
        <h3 className="text-2xl font-serif text-white mb-4">Still have questions?</h3>
        <p className="text-white/60 font-sans mb-8 max-w-lg mx-auto">
          Our dedicated concierge team is available 24/7 to assist you with any inquiries regarding our collections or your orders.
        </p>
        <a href="/contact" className="inline-block bg-[#D4AF37] text-black font-bold font-sans tracking-wide px-8 py-3 rounded-none hover:bg-white transition-colors duration-300">
          CONTACT CONCIERGE
        </a>
      </div>
    </div>
  );
}
