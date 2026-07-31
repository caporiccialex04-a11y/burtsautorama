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
  return (
    <>
      <PageHero title={aboutCopy.title} tagline={aboutCopy.tagline} />

      <section className="section-space">
        <div className="container-narrow">
          <p className="text-lg leading-relaxed text-ink-soft">{aboutCopy.body}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="mb-10">
            <p className="eyebrow">Our Team</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase md:text-5xl">
              {aboutCopy.teamHeading}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="surface-card overflow-hidden">
                <div className="relative aspect-[4/3] bg-paper-deep">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl font-extrabold tracking-wide text-navy uppercase">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-brand-deep uppercase">
                    {member.role}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{member.bio}</p>
                  <ul className="mt-5 space-y-1 text-sm text-ink">
                    {member.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                          className="font-semibold hover:text-brand-deep"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                    {member.email ? (
                      <li>
                        <a
                          href={`mailto:${member.email}`}
                          className="font-semibold hover:text-brand-deep"
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

          <div className="mt-12 rounded-2xl bg-navy px-6 py-10 text-white md:px-10">
            <h2 className="font-display text-2xl font-extrabold tracking-wide uppercase md:text-3xl">
              Visit the shop
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              {site.address.full}. {site.hours.summaryWeekday}.{" "}
              {site.hours.summarySaturday}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
