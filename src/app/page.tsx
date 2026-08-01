import Image from "next/image";
import Link from "next/link";
import { VehicleCard } from "@/components/VehicleCard";
import { getFeaturedVehicles } from "@/data/inventory";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedVehicles();

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-navy text-white">
        <Image
          src="/images/shop/dealership.webp"
          alt="Bert Suyker Autorama dealership building in Burgessville, Ontario"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/35"
          aria-hidden="true"
        />
        <div className="container-page relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <p className="reveal text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
              Burgessville, Ontario · Since {site.foundedDisplay}
            </p>
            <h1 className="reveal reveal-delay-1 mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-wide uppercase sm:text-6xl md:text-8xl">
              Bert Suyker
              <span className="mt-2 block text-brand-soft">Autorama</span>
            </h1>
            <span className="brand-rule reveal reveal-delay-2 mt-6 mb-5" />
            <p className="reveal reveal-delay-2 max-w-xl text-xl font-medium text-white md:text-2xl">
              {site.tagline}
            </p>
            <p className="reveal reveal-delay-3 mt-4 max-w-xl text-base text-white/80 md:text-lg">
              Open Monday through Friday 8am - 5pm. Open Saturdays by appointment.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Link href="/inventory" className="btn btn-primary">
                View Inventory
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Recent Vehicles</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase md:text-5xl">
                Browse Our Selection
              </h2>
              <p className="mt-3 max-w-2xl text-ink-soft">
                Browse through our selection of vehicles that have recently been
                added to our inventory.
              </p>
            </div>
            <Link href="/inventory" className="btn btn-dark">
              View Inventory
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featured.map((vehicle, index) => (
              <div
                key={vehicle.slug}
                className={index > 0 ? "hidden sm:block" : undefined}
              >
                <VehicleCard vehicle={vehicle} priority={index < 2} />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">{site.pricingDisclaimer}</p>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="eyebrow text-brand-soft">Service Department</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide uppercase md:text-5xl">
              Maintenance &amp; Repairs
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Since 1962, Bert’s Autorama has helped thousands of drivers
              maintain their vehicles. Competitive pricing. Over 35 years of
              experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-primary">
                Book a Service
              </Link>
              <a href={site.phoneHref} className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Vehicle Diagnostics",
              "Air Conditioning",
              "Brake Repair",
              "Safety Inspections",
              "Transmission Repair",
              "General Maintenance",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-4 text-sm font-semibold tracking-wide"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            {
              label: "In business since",
              value: site.foundedDisplay,
              detail:
                "Since 1962, Bert’s Autorama has helped thousands of drivers maintain their vehicles.",
            },
            {
              label: "Experience",
              value: "35+ years",
              detail:
                "We have the highest standards for ethical business practices, maintaining a professional image, and showing good employee and community relations.",
            },
            {
              label: "Hours",
              value: "Mon–Fri 8–5",
              detail: `${site.hours.summaryWeekday}. ${site.hours.summarySaturday}.`,
            },
          ].map((item) => (
            <div key={item.label} className="surface-card p-7">
              <p className="eyebrow">{item.label}</p>
              <p className="mt-3 font-display text-4xl font-extrabold tracking-wide text-navy uppercase">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-ink-soft">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page overflow-hidden rounded-2xl bg-steel px-6 py-12 text-white md:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-wide uppercase md:text-4xl">
                Ready for your next vehicle?
              </h2>
              <p className="mt-3 max-w-xl text-white/80">
                Shop our virtual showroom of used cars, trucks and suv’s online
                then stop by for a test drive.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/inventory" className="btn btn-primary">
                View Inventory
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
