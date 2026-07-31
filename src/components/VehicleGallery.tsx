"use client";

import Image from "next/image";
import { useState } from "react";

type VehicleGalleryProps = {
  images: string[];
  title: string;
  sold?: boolean;
};

export function VehicleGallery({ images, title, sold }: VehicleGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper-deep">
        <Image
          src={current}
          alt={`${title} — photo ${active + 1} of ${images.length}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        {sold ? (
          <span className="absolute left-4 top-4 rounded-sm bg-sold px-3 py-1.5 font-display text-sm font-bold tracking-wider text-white uppercase">
            Sold
          </span>
        ) : null}
      </div>
      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === active}
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-md border-2 transition ${
                  index === active
                    ? "border-brand"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
