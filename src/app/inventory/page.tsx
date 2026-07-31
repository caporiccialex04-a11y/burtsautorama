import type { Metadata } from "next";
import { InventoryFilters } from "@/components/InventoryFilters";
import { PageHero } from "@/components/PageHero";
import { inventory } from "@/data/inventory";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Inventory",
  description:
    "Browse quality used cars, trucks, and SUVs at Bert Suyker Autorama in Burgessville, Ontario.",
};

export default function InventoryPage() {
  return (
    <>
      <PageHero
        title="Our Inventory"
        tagline="Let us know if you don't see what you are looking for!"
      />

      <section className="section-space">
        <div className="container-page">
          <p className="mb-8 max-w-3xl text-ink-soft">
            Sample listings below reflect inventory published on the live site at
            rebuild time. Prices shown are listed prices —{" "}
            {site.pricingDisclaimer}
          </p>
          <InventoryFilters vehicles={inventory} />
        </div>
      </section>
    </>
  );
}
