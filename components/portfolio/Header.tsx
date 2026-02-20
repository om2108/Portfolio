export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:h-16 sm:flex-row sm:gap-0 sm:px-8 sm:py-0">
        <a href="#home" className="text-sm font-semibold tracking-[0.18em] text-zinc-200">
          OMKAR PAWAR
        </a>
        <nav className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-400 sm:w-auto sm:justify-end sm:gap-5 sm:text-sm">
          <a className="transition-colors hover:text-cyan-300" href="#projects">
            Projects
          </a>
          <a className="transition-colors hover:text-cyan-300" href="#skills">
            Skills
          </a>
          <a className="transition-colors hover:text-cyan-300" href="#certificates">
            Certificates
          </a>
          <a className="transition-colors hover:text-cyan-300" href="#badges">
            Badges
          </a>
          <a className="transition-colors hover:text-cyan-300" href="#resume">
            Resume
          </a>
          <a className="transition-colors hover:text-cyan-300" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
