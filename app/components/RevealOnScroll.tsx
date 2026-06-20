"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

export default function RevealOnScroll({
  children,
  className = "",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Faz a animação acontecer somente uma vez
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`
        w-full
        transform-gpu
        transition-all
        duration-[1200ms]
        ease-out
        will-change-transform

        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}