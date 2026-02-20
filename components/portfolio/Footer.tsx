export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-400 sm:flex-row sm:px-8 sm:text-sm">
        <p>© {new Date().getFullYear()} Omkar Pawar</p>
        <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
