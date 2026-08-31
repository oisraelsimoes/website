"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, emailHref } from "@/lib/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-ivory/10"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#inicio" className="flex items-baseline gap-2 font-mono text-lg sm:text-xl uppercase tracking-[0.14em] text-ivory">
          TARS
          <sup className="font-mono text-[14px] tracking-wider text-accent">®</sup>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-mono uppercase tracking-wider text-ivory/70 hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={emailHref()} className="btn-primary">
            Solicitar proposta
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ivory p-2"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink/97 backdrop-blur-md border-t border-ivory/10">
          <div className="container-x flex flex-col gap-1 py-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-mono uppercase tracking-wider text-ivory/80 border-b border-ivory/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={emailHref()}
              className="btn-primary mt-4 w-full"
            >
              Solicitar proposta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
