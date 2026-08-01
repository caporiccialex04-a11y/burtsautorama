export const aboutCopy = {
  title: "About Us",
  tagline: "Customer service is not a department, it's how we do things",
  /** Kept word-for-word from the live site; split only for layout. */
  paragraphs: [
    "Let us show you how easy it is to buy a quality used car in Southwestern Ontario. We believe fair prices, superior service, and treating customers right leads to satisfied repeat buyers.",
    "Our friendly and knowledgeable sales staff is here to help you find the car you deserve, priced to fit your budget. Shop our virtual showroom of used cars, trucks and suv’s online then stop by for a test drive. We will be happy to help you find your next Vehicle.",
    "Our 3 Bay Service Department is equipped with the latest diagnostic equipment. We offer competitive pricing on parts and service. We also offer free pick up and delivery of your vehicle and loaner vehicles.",
  ],
  beliefs: ["Fair prices", "Superior service", "Treating customers right"],
  serviceHighlights: [
    "3 Bay Service Department with the latest diagnostic equipment",
    "Competitive pricing on parts and service",
    "Free pick up and delivery of your vehicle",
    "Loaner vehicles available",
  ],
  teamHeading: "Bert & William Suyker",
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  phones: string[];
  email?: string;
};

export const team: TeamMember[] = [
  {
    name: "Bert Suyker",
    role: "Founder",
    bio: "Bert Suyker has been in the automotive industry for over 45 years. Starting as a licensed Volkswagen technician, to service manager of a General Motors Dealership in this area, after which he started Berts Autorama in 1981. Bert enjoys dealing with customers, and is currently focused on sales and management.",
    image: "/images/team/bert-suyker.webp",
    imageAlt: "Bert Suyker, Founder of Bert Suyker Autorama",
    phones: ["(519) 424-9094", "(519) 550-1974"],
    email: "info@bertsautorama.ca",
  },
  {
    name: "William Suyker",
    role: "Technician/Sales",
    bio: "William has been in the automotive industry well over 25 years. Formerly a Ford technician at Stauffer Motors in Tillsonburg, ON, William has built great experience in repairing late model vehicles, having completed all Ford pro-tech specialties, and obtained his Master Technician Diploma. (Only 1 out of 500 Technicians have reached this in Canada.)",
    image: "/images/team/william-suyker.webp",
    imageAlt: "William Suyker, Technician/Sales at Bert Suyker Autorama",
    phones: ["(519) 424-9094"],
    email: "info@bertsautorama.ca",
  },
];
