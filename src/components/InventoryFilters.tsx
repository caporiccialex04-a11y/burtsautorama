"use client";

import { useMemo, useState } from "react";
import type { Vehicle } from "@/data/inventory";
import { VehicleCard } from "./VehicleCard";

type InventoryFiltersProps = {
  vehicles: Vehicle[];
};

export function InventoryFilters({ vehicles }: InventoryFiltersProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "available" | "sold">("all");
  const [make, setMake] = useState("all");

  const makes = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.make))).sort(),
    [vehicles],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vehicles.filter((v) => {
      if (status !== "all" && v.status !== status) return false;
      if (make !== "all" && v.make !== make) return false;
      if (!q) return true;
      const haystack = `${v.title} ${v.make} ${v.model} ${v.bodyStyle} ${v.year}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [vehicles, query, status, make]);

  return (
    <div>
      <div className="surface-card grid gap-3 p-4 md:grid-cols-[1.4fr_1fr_1fr] md:p-5">
        <label className="grid gap-1 text-sm font-semibold text-navy">
          Search
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Year, make, model…"
            className="min-h-11 rounded-md border border-line bg-paper px-3 font-normal outline-none focus:border-brand"
          />
        </label>
        <label className="grid gap-1 text-sm font-semibold text-navy">
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as typeof status)}
            className="min-h-11 rounded-md border border-line bg-paper px-3 font-normal outline-none focus:border-brand"
          >
            <option value="all">All listings</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm font-semibold text-navy">
          Make
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="min-h-11 rounded-md border border-line bg-paper px-3 font-normal outline-none focus:border-brand"
          >
            <option value="all">All makes</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        {filtered.length} vehicle{filtered.length === 1 ? "" : "s"} matching
      </p>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-lg border border-dashed border-line bg-surface p-8 text-ink-soft">
          No vehicles match your filters. Let us know if you don&apos;t see what
          you are looking for — call us and we&apos;ll help.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
              priority={index < 2}
            />
          ))}
        </div>
      )}
    </div>
  );
}
