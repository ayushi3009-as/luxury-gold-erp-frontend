"use client";
import React, { useState, useEffect } from "react";

export default function HeroCarousel({ tenant }: { tenant?: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // If the tenant uploaded a hero image in settings, use it as the first slide
  const defaultImages = [
    "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&auto=format&fit=crop&q=80"
  ];

  const images = tenant?.heroImageUrl 
    ? [tenant.heroImageUrl, ...defaultImages] 
    : defaultImages;

  const title = tenant?.heroTitle || "A Legacy of Pure Elegance";
  const subtitle = tenant?.heroSubtitle || "Timeless Craftsmanship Since 1995";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      {images.map((img, i) => (
        <div 
          key={i} 
          className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={img} className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white uppercase tracking-[0.3em] text-sm md:text-md mb-4 font-light">
          {subtitle}
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight max-w-4xl drop-shadow-lg">
          {title}
        </h1>
        <a href="/collections" className="bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#D4AF37] hover:text-text-primary transition-colors duration-300">
          Explore Collection
        </a>
      </div>
    </section>
  );
}
