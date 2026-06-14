import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { industries, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: `Industries served by ${site.name} including IT parks, manufacturing, healthcare and more.`,
};

const industryDetails: Record<(typeof industries)[number], string> = {
  "IT Parks": "Security, access control and facility services for tech campuses and co-working spaces.",
  Manufacturing: "Industrial security, housekeeping and technical maintenance for production facilities.",
  Warehousing: "Perimeter security, monitoring and operational support for logistics hubs.",
  Healthcare: "Compliant housekeeping, security and facility support for hospitals and clinics.",
  Education: "Campus security, maintenance and hospitality support for institutions.",
  "Commercial Buildings": "Integrated FM and security for offices and business parks.",
  "Residential Communities": "Residential security, housekeeping and amenity management.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-brand-100 bg-white py-14">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we serve"
            description="Experience across commercial, industrial, healthcare, education and residential environments."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-brand-900">{industry}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {industryDetails[industry]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
