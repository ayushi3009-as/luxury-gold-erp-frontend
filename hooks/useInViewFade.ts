'use client';
import { useEffect, useRef, useState } from 'react';

export function useInViewFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { 
        setVisible(true); 
        obs.disconnect(); 
      }
    }, { threshold: 0.15 });
    
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { 
    ref, 
    className: `transition-all duration-700 ease-luxury ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` 
  };
}
