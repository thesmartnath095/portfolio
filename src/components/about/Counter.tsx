"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

export function Counter({ target, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          let step = 0;

          const interval = setInterval(() => {
            step++;
            // Ease out
            const progress = step / steps;
            current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
            setCount(current);

            if (step >= steps) {
              setCount(target);
              clearInterval(interval);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl font-bold text-accent">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </div>
  );
}
