import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Vehicle } from "@/data/inventory";
import { site } from "@/data/site";

type VehicleCardProps = {
  vehicle: Vehicle;
  priority?: boolean;
};

export function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  return (
    <article className="surface-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(11,36,48,0.16)]">
      <Link href={`/inventory/${vehicle.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
          <Image
            src={vehicle.images[0]}
            alt={`${vehicle.title} — exterior photo`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
          {vehicle.status === "sold" ? (
            <span className="absolute left-3 top-3 rounded-sm bg-sold px-2.5 py-1 font-display text-xs font-bold tracking-wider text-white uppercase">
              Sold
            </span>
          ) : (
            <span className="absolute left-3 top-3 rounded-sm bg-brand px-2.5 py-1 font-display text-xs font-bold tracking-wider text-white uppercase">
              Available
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-bold tracking-wide text-navy uppercase">
            {vehicle.title}
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            {vehicle.mileage}
            {vehicle.engine ? ` · ${vehicle.engine}` : ""}
          </p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <p className="font-display text-2xl font-extrabold text-brand-deep">
                {formatPrice(vehicle.price)}
              </p>
              <p className="text-xs text-ink-soft">{site.pricingDisclaimerShort}</p>
            </div>
            <span className="text-sm font-semibold text-navy underline-offset-4 group-hover:underline">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
