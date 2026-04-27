"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface MobileNavProps {
  locale: Locale;
  nav: { projects: string; about: string };
}

export function MobileNav({ locale, nav }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={cn(
            "h-px w-5 bg-text transition-all duration-300",
            open && "translate-y-[3.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "h-px w-5 bg-text transition-all duration-300",
            open && "-translate-y-[3.5px] -rotate-45"
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="glass absolute left-0 right-0 top-16 border-b border-white/5 p-6">
          <nav className="flex flex-col gap-4">
            <a
              href={`/${locale}#projects`}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-text-muted transition-colors hover:text-heading"
            >
              {nav.projects}
            </a>
            <a
              href={`/${locale}#about`}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-text-muted transition-colors hover:text-heading"
            >
              {nav.about}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
