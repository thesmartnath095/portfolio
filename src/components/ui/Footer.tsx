interface FooterProps {
  builtWith: string;
  rights: string;
}

export function Footer({ builtWith, rights }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <a
          href="mailto:54nathan.p@gmail.com"
          className="font-mono text-sm text-text-muted transition-colors hover:text-accent"
        >
          54nathan.p@gmail.com
        </a>
        <p className="text-xs text-text-muted">
          {builtWith} &middot; &copy; {year} Nathan Pernot. {rights}
        </p>
      </div>
    </footer>
  );
}
