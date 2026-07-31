/**
 * Sample / demo inventory data scraped from bertsautorama.ca at rebuild time.
 * Real inventory changes — swap this file or connect a CMS/API later.
 */
export type VehicleStatus = "available" | "sold";

export type Vehicle = {
  slug: string;
  year: number;
  make: string;
  model: string;
  title: string;
  price: number;
  status: VehicleStatus;
  bodyStyle: string;
  mileage: string;
  transmission?: string;
  drivetrain?: string;
  engine?: string;
  exteriorColor?: string;
  interiorColor?: string;
  condition: string;
  description: string;
  images: string[];
  featured?: boolean;
};

export const inventory: Vehicle[] = [
  {
    slug: "2022-ram-1500-classic-4x4-crew-cab",
    year: 2022,
    make: "RAM",
    model: "1500 CLASSIC",
    title: "2022 RAM 1500 CLASSIC 4X4 CREW CAB",
    price: 32999,
    status: "available",
    bodyStyle: "Pick Up",
    mileage: "106,469 KMS",
    transmission: "8-Speed Automatic",
    drivetrain: "4WD",
    engine: "5.7 HEMI",
    exteriorColor: "Black",
    interiorColor: "Black",
    condition: "Used",
    description: "Excellent Condition. New tires. Former Daily Rental.",
    images: [
      "/images/vehicles/ram-1500/2022-6.webp",
      "/images/vehicles/ram-1500/2022-5.webp",
      "/images/vehicles/ram-1500/2022-9.webp",
      "/images/vehicles/ram-1500/2022-8.webp",
      "/images/vehicles/ram-1500/2022-7.webp",
      "/images/vehicles/ram-1500/2022-4-rotated.webp",
      "/images/vehicles/ram-1500/2022-3-rotated.webp",
      "/images/vehicles/ram-1500/2022-2-rotated.webp",
      "/images/vehicles/ram-1500/2022-1-rotated.webp",
    ],
    featured: true,
  },
  {
    slug: "2022-polaris-indy-vr1-850-137",
    year: 2022,
    make: "Polaris",
    model: "INDY VR1 850 137",
    title: "2022 Polaris INDY VR1 850 137",
    price: 11999,
    status: "sold",
    bodyStyle: "Snowmobile",
    mileage: "4,400 KMS",
    engine: "850",
    exteriorColor: "Black",
    condition: "Used",
    description:
      'Excellent Condition. 1.25" Ice Ripper track. 7S Display. Electric Start and Reverse. One Owner. Factory Warranty until January 2026.',
    images: [
      "/images/vehicles/polaris-indy/indy-2.webp",
      "/images/vehicles/polaris-indy/indy-1.webp",
      "/images/vehicles/polaris-indy/indy-3.webp",
      "/images/vehicles/polaris-indy/indy-4-rotated.webp",
      "/images/vehicles/polaris-indy/indy-7-rotated.webp",
      "/images/vehicles/polaris-indy/indy-8-rotated.webp",
      "/images/vehicles/polaris-indy/indy5-rotated.webp",
    ],
    featured: true,
  },
  {
    slug: "2013-ford-f-150-fx4",
    year: 2013,
    make: "Ford",
    model: "F-150 FX4",
    title: "2013 Ford F-150 FX4",
    price: 14999,
    status: "sold",
    bodyStyle: "Pick Up",
    mileage: "225,200 KMS",
    transmission: "6-Speed Automatic",
    drivetrain: "4WD",
    engine: "3.5 Litre Ecoboost V6",
    exteriorColor: "Black",
    interiorColor: "Black",
    condition: "Used",
    description:
      "Excellent Condition, Crew Cab, 4X4, 3.5 Liter Ecoboost V6, comes equipped with Navigation and much more.",
    images: [
      "/images/vehicles/f150/f4.webp",
      "/images/vehicles/f150/f5.webp",
      "/images/vehicles/f150/f6.webp",
      "/images/vehicles/f150/f7.webp",
      "/images/vehicles/f150/f8.webp",
      "/images/vehicles/f150/f1.webp",
      "/images/vehicles/f150/f3.webp",
    ],
    featured: true,
  },
  {
    slug: "2015-dodge-journey-sxt",
    year: 2015,
    make: "Dodge",
    model: "Journey SXT",
    title: "2015 Dodge Journey SXT",
    price: 7999,
    status: "sold",
    bodyStyle: "SUV",
    mileage: "192,121 KMS",
    transmission: "Automatic",
    drivetrain: "FWD",
    engine: "3.6 Liter V6",
    exteriorColor: "Silver",
    interiorColor: "Black",
    condition: "Used",
    description:
      "Excellent Condition Only 192,313 Kilometers, 3.6 Liter V6, 7 Passenger, comes equipped with Navigation and much more.",
    images: [
      "/images/vehicles/journey/d6.webp",
      "/images/vehicles/journey/d5.webp",
      "/images/vehicles/journey/d7.webp",
      "/images/vehicles/journey/d8.webp",
      "/images/vehicles/journey/d9.webp",
      "/images/vehicles/journey/d10.webp",
      "/images/vehicles/journey/d1.webp",
      "/images/vehicles/journey/d2.webp",
      "/images/vehicles/journey/d3.webp",
      "/images/vehicles/journey/d4.webp",
    ],
    featured: true,
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return inventory.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  // Keep available vehicles first to mirror the live homepage ordering emphasis
  return [...inventory].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "available" ? -1 : 1;
  });
}
