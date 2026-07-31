'use client';
import { useRef } from 'react';

export function MagneticButton({ children, className = '', ...props }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  
  const reset = () => { 
    if (ref.current) ref.current.style.transform = 'translate(0,0)'; 
  };
  
  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`border border-gold text-gold text-xs uppercase tracking-[0.2em] px-9 py-4 transition-[background-color,color,transform] duration-500 ease-luxury hover:bg-gold hover:text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
