import Link from "next/link";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {site.tagline}. In business since {site.foundedDisplay}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold tracking-wide uppercase">
            Visit Us
          </h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/80">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
          </address>
          <p className="mt-4 text-sm text-white/80">
            <a href={site.phoneHref} className="hover:text-brand-soft">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-brand-soft">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold tracking-wide uppercase">
            Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{site.hours.summaryWeekday}</li>
            <li>{site.hours.summarySaturday}</li>
          </ul>
          <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/75 underline-offset-4 hover:text-white hover:underline"
              >
                {item.label === "Service Maintenance and Repairs"
                  ? "Services"
                  : item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>{site.pricingDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
