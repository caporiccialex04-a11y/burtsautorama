import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bert Suyker Autorama in Burgessville, Ontario — phone, hours, and directions.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero
        title="Contact Us"
        tagline="We are conveniently located on Highway 59 in Burgessville, Ontario"
      />

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="surface-card p-6 md:p-8">
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-navy uppercase">
                Contact Information
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
                <div>
                  <p className="font-semibold text-navy">Address</p>
                  <p>
                    {site.legalName}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region}{" "}
                    {site.address.postal}
                    <br />
                    {site.address.country}
                  </p>
                </div>
                <p>
                  <span className="font-semibold text-navy">Phone: </span>
                  <a href={site.phoneHref} className="hover:text-brand-deep">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Fax: </span>
                  {site.fax}
                </p>
                <p>
                  <span className="font-semibold text-navy">Email: </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-brand-deep"
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Web: </span>
                  {site.web}
                </p>
              </div>
            </div>

            <div className="surface-card p-6 md:p-8">
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-navy uppercase">
                Business Hours
              </h2>
              <p className="mt-2 text-sm text-ink-soft">Sales Department</p>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {site.hours.sales.map((row) => (
                    <tr key={row.day} className="border-b border-line/80">
                      <th
                        scope="row"
                        className="py-2 pr-4 text-left font-semibold text-navy"
                      >
                        {row.day}
                      </th>
                      <td className="py-2 text-ink-soft">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-wide text-navy uppercase">
              Contact Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-wide text-navy uppercase">
            Find Us
          </h2>
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow)]">
            <iframe
              title={`Map to ${site.name}`}
              src={mapSrc}
              className="h-[360px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">{site.address.full}</p>
        </div>
      </section>
    </>
  );
}
