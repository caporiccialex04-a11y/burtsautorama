import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VehicleGallery } from "@/components/VehicleGallery";
import {
  formatPrice,
  getVehicleBySlug,
  inventory,
} from "@/data/inventory";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return inventory.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: "Vehicle not found" };
  return {
    title: vehicle.title,
    description: vehicle.description,
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const specs: { label: string; value?: string }[] = [
    { label: "Year", value: String(vehicle.year) },
    { label: "Make", value: vehicle.make },
    { label: "Model", value: vehicle.model },
    { label: "Body Style", value: vehicle.bodyStyle },
    { label: "Mileage", value: vehicle.mileage },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Drivetrain", value: vehicle.drivetrain },
    { label: "Engine", value: vehicle.engine },
    { label: "Exterior Color", value: vehicle.exteriorColor },
    { label: "Interior Color", value: vehicle.interiorColor },
    { label: "Condition", value: vehicle.condition },
  ];

  return (
    <section className="section-space">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-soft">
          <Link href="/inventory" className="hover:text-brand-deep">
            Our Inventory
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{vehicle.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <VehicleGallery
            images={vehicle.images}
            title={vehicle.title}
            sold={vehicle.status === "sold"}
          />

          <div>
            <p className="eyebrow">
              {vehicle.status === "sold" ? "Sold" : "Available"}
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-navy uppercase md:text-5xl">
              {vehicle.title}
            </h1>
            <p className="mt-4 font-display text-4xl font-extrabold text-brand-deep">
              {formatPrice(vehicle.price)}
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              {site.pricingDisclaimerShort}
            </p>
            <p className="mt-6 leading-relaxed text-ink-soft">
              {vehicle.description}
            </p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {specs
                .filter((spec) => Boolean(spec.value))
                .map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-lg border border-line bg-surface px-4 py-3"
                  >
                    <dt className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-navy">{spec.value}</dd>
                  </div>
                ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-primary">
                Call Now
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Contact Us
              </Link>
              <Link href="/inventory" className="btn btn-dark">
                Back to Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
