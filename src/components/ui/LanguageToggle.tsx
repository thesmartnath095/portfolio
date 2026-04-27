"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={switchedPath}
      className={cn(
        "relative flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5",
        "font-mono text-xs tracking-wider uppercase transition-colors",
        "hover:border-accent/40 hover:text-accent"
      )}
    >
      <span className={cn(locale === "en" ? "text-accent" : "text-text-muted")}>
        EN
      </span>
      <span className="text-text-muted">/</span>
      <span className={cn(locale === "fr" ? "text-accent" : "text-text-muted")}>
        FR
      </span>
    </Link>
  );
}
