export const site = {
  name: "B-SSARC Ventures",
  shortName: "B-SSARC",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bssarc.com",
  tagline: "Integrated Security & Facility Services",
  motto: "Securing Trust. Managing Excellence.",
  description:
    "B-SSARC Ventures delivers integrated security, facility management, technical, F&B and real estate services across India.",
  established: 2026,
  email: "SiddhashreeInfotech@gmail.com",
  phone: "+91 9900661177",
  phoneHref: "tel:+919900661177",
  address: {
    line1: "MAX Towers, 3rd Floor",
    line2: "Near Amruthahalli Police Station",
    city: "Bangalore",
    pin: "560092",
    country: "India",
  },
  leadership: {
    name: "Avinash Guruswamy",
    title: "Founder & CEO",
  },
  stats: {
    workforce: "150+",
    locations: ["Bangalore", "Mumbai", "Hyderabad", "Chennai"],
  },
  compliance: ["GST", "MSME", "ESI", "PF Registered"],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const whyUs = [
  {
    title: "150+ Workforce",
    description: "Skilled professionals deployed across diverse client environments.",
  },
  {
    title: "Pan India Presence",
    description: "Operations in major metros with expansion across India.",
  },
  {
    title: "Compliance-Driven",
    description: "GST, MSME, ESI and PF registered operations you can trust.",
  },
  {
    title: "Single-Window Partner",
    description: "Security, facility, technical, F&B and real estate under one roof.",
  },
] as const;

export const services = [
  {
    slug: "security",
    title: "Security Services",
    summary:
      "End-to-end protection for corporate, industrial, residential and event environments.",
    items: [
      "Corporate Security",
      "Industrial Security",
      "Residential Security",
      "Event Security",
      "CCTV Monitoring",
      "Access Control",
      "Fire & Safety",
    ],
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    summary: "Keep workplaces clean, healthy and professionally maintained.",
    items: [
      "Housekeeping",
      "Pantry Services",
      "Gardening",
      "Indoor Plants",
      "Pest Control",
    ],
  },
  {
    slug: "technical",
    title: "Technical Services",
    summary: "Reliable maintenance for building systems and infrastructure.",
    items: [
      "Electrical",
      "Plumbing",
      "Carpentry",
      "Preventive Maintenance",
      "Breakdown Maintenance",
    ],
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage Services",
    summary: "Hospitality support for corporate cafeterias and pantry operations.",
    items: [
      "Corporate Cafeterias",
      "Pantry Operations",
      "Catering Support",
      "Hospitality Support",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Services",
    summary: "Advisory and transaction support for property and occupancy needs.",
    items: [
      "Leasing",
      "Property Transactions",
      "Advisory",
      "Occupancy Solutions",
    ],
  },
] as const;

export const industries = [
  "IT Parks",
  "Manufacturing",
  "Warehousing",
  "Healthcare",
  "Education",
  "Commercial Buildings",
  "Residential Communities",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "Site survey and requirement analysis to understand your needs.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Tailored service design, staffing and compliance planning.",
  },
  {
    step: "03",
    title: "Deployment",
    description: "Trained teams deployed with clear SOPs and supervision.",
  },
  {
    step: "04",
    title: "Monitoring",
    description: "Ongoing oversight, reporting and quality checks.",
  },
  {
    step: "05",
    title: "Continuous Improvement",
    description: "Regular reviews to refine service delivery and outcomes.",
  },
] as const;
