"use client";

import { useEffect, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
const RESOLVE_DURATION = 1500;
const FRAME_INTERVAL = 40;

export function GlitchText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [resolved, setResolved] = useState(false);

  const scramble = useCallback(() => {
    const totalFrames = Math.ceil(RESOLVE_DURATION / FRAME_INTERVAL);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          // Characters resolve left to right
          if (i / text.length < progress) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayed(result);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayed(text);
        setResolved(true);
      }
    }, FRAME_INTERVAL);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    // Small delay before starting
    const timeout = setTimeout(scramble, 300);
    return () => clearTimeout(timeout);
  }, [scramble]);

  return (
    <span className={`${className ?? ""} ${resolved ? "text-shimmer" : ""}`}>
      {displayed || text.replace(/./g, "\u00A0")}
    </span>
  );
}
