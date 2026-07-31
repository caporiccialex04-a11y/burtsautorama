import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  aboutServiceExtras,
  serviceCallouts,
  servicesIntro,
  servicesProvided,
} from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Maintenance and Repairs",
  description:
    "Vehicle maintenance, diagnostics, brakes, A/C, safety inspections, and more at Bert Suyker Autorama.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title={servicesIntro.title} tagline={servicesIntro.tagline} />

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">{servicesIntro.heading}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase md:text-5xl">
              We Provide
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {servicesIntro.body}
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
              {aboutServiceExtras.bayNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-primary">
                Call Us Today
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Contact Form
              </Link>
            </div>
          </div>

          <ul className="grid gap-4">
            {servicesProvided.map((service) => (
              <li key={service.title} className="surface-card p-5">
                <h3 className="font-display text-xl font-bold tracking-wide text-navy uppercase">
                  {service.title}
                </h3>
                {service.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-deep/70 pb-20 pt-4">
        <div className="container-page">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Call Us Today</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase md:text-4xl">
                Service Menu
              </h2>
            </div>
            <a href={site.phoneHref} className="btn btn-dark">
              {site.phone}
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCallouts.map((title) => (
              <article
                key={title}
                className="surface-card flex min-h-[140px] flex-col justify-between p-6 transition hover:-translate-y-0.5"
              >
                <h3 className="font-display text-2xl font-bold tracking-wide text-navy uppercase">
                  {title}
                </h3>
                <a
                  href={site.phoneHref}
                  className="mt-6 text-sm font-semibold text-brand-deep underline-offset-4 hover:underline"
                >
                  Book a Service
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
