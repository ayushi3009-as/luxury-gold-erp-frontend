"use client";

import React, { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dbxeubkhh/image/upload/v1778417607/designarena_image_m186u8gc_holo4e.png",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&auto=format&fit=crop&q=80"
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="hero-full-banner relative overflow-hidden bg-gray-950 h-[85vh] md:h-[90vh]">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 10 : 0,
          }}
        >
          <picture className="block h-full w-full">
            <img
              alt="Hero Slide"
              className="block h-full w-full object-cover animate-[kenburns_20s_ease-out_infinite_alternate]"
              fetchPriority={index === 0 ? "high" : "auto"}
              src={src}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      ))}
      <button 
        onClick={prevSlide}
        className="absolute left-3 sm:left-8 top-1/2 z-20 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-3 sm:right-8 top-1/2 z-20 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
      <div className="absolute bottom-6 sm:bottom-8 z-20 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide ? "bg-white w-6 sm:w-8" : "bg-white/40 w-3 sm:w-4"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
