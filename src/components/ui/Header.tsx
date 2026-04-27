"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";
import { MobileNav } from "./MobileNav";
import type { Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  nav: { projects: string; about: string };
}

export function Header({ locale, nav }: HeaderProps) {
  return (
    <header className="glass fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-bold tracking-tight text-heading transition-colors hover:text-accent"
        >
          NP
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          <NavLink href={`/${locale}#projects`}>{nav.projects}</NavLink>
          <NavLink href={`/${locale}#about`}>{nav.about}</NavLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle locale={locale} />
          <MobileNav locale={locale} nav={nav} />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative font-mono text-sm text-text-muted transition-colors hover:text-heading"
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
