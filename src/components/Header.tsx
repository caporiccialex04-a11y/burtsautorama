"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-white/90">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-semibold tracking-wide text-white transition-colors hover:text-brand-soft"
          >
            <PhoneIcon />
            <span>{site.phone}</span>
          </a>
          <p className="hidden text-white/75 sm:block">{site.address.full}</p>
        </div>
      </div>

      <div className="border-b border-white/10 bg-navy-mid/95 text-white backdrop-blur-md">
        <div className="container-page flex items-center justify-between gap-4 py-3 md:py-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label === "Service Maintenance and Repairs"
                    ? "Services"
                    : item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phoneHref} className="btn btn-primary">
              Call Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-full bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-white transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-b border-line bg-navy lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-md px-3 py-3 text-base font-semibold ${
                  active ? "bg-brand text-white" : "text-white/90 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={site.phoneHref} className="btn btn-primary mt-3">
            Call Now — {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 3.75h2.2l1.3 3.7-1.45 1.1a12.4 12.4 0 0 0 5.9 5.9l1.1-1.45 3.7 1.3v2.2c0 .9-.7 1.65-1.6 1.75-7.2.75-13.25-5.3-12.5-12.5.1-.9.85-1.6 1.75-1.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
