import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { aboutCopy, team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Bert and William Suyker — quality used cars and exceptional service in Burgessville, Ontario.",
};

export default function AboutPage() {
  const [intro, sales, service] = aboutCopy.paragraphs;

  return (
    <>
      <PageHero title={aboutCopy.title} tagline={aboutCopy.tagline} />

      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-36">
            <p className="eyebrow">Our approach</p>
            <blockquote className="mt-4 border-l-4 border-brand pl-5">
              <p className="font-display text-3xl font-bold leading-tight tracking-wide text-navy md:text-4xl">
                “{aboutCopy.tagline}”
              </p>
            </blockquote>
            <ul className="mt-8 space-y-3">
              {aboutCopy.beliefs.map((belief) => (
                <li
                  key={belief}
                  className="flex items-center gap-3 text-sm font-semibold tracking-wide text-navy uppercase"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  {belief}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-ink-soft">{intro}</p>
              <p className="text-lg leading-relaxed text-ink-soft">{sales}</p>
            </div>

            <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-navy uppercase md:text-3xl">
                3 Bay Service Department
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{service}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutCopy.serviceHighlights.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-3 text-sm font-medium text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep/50 py-16 md:py-20">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Our Team</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase md:text-5xl">
              {aboutCopy.teamHeading}
            </h2>
          </div>

          <div className="space-y-10">
            {team.map((member) => (
              <article
                key={member.name}
                className="grid gap-6 border-b border-line pb-10 last:border-b-0 last:pb-0 md:grid-cols-[240px_1fr] md:gap-10"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-paper-deep md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-semibold tracking-[0.14em] text-brand-deep uppercase">
                    {member.role}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase">
                    {member.name}
                  </h3>
                  <span className="brand-rule mt-4 mb-5" aria-hidden="true" />
                  <p className="max-w-2xl leading-relaxed text-ink-soft">
                    {member.bio}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {member.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                          className="font-semibold text-navy hover:text-brand-deep"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                    {member.email ? (
                      <li>
                        <a
                          href={`mailto:${member.email}`}
                          className="font-semibold text-navy hover:text-brand-deep"
                        >
                          {member.email}
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl bg-navy px-6 py-12 text-white md:px-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-wide uppercase md:text-3xl">
                  Visit the shop
                </h2>
                <p className="mt-3 max-w-2xl text-white/80">
                  {site.address.full}. {site.hours.summaryWeekday}.{" "}
                  {site.hours.summarySaturday}.
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
        </div>
      </section>
    </>
  );
}
