import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — vision, mission, compliance and leadership.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-100 bg-white py-14">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title={`About ${site.name}`}
            description={`Established in ${site.established}, we deliver integrated security, facility management, technical, F&B and real estate services across India.`}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-900">Vision</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              To become India&apos;s most trusted integrated security and facility services partner.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-900">Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Deliver secure, compliant, efficient and customer-focused solutions across industries.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-brand-50 py-16">
        <Container>
          <SectionHeading
            title="Brand identity"
            description="Shield + Building + Growth Arrow — representing protection, infrastructure and business growth. Blue corporate branding with a professional, trustworthy tone."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-900">Protection</h3>
              <p className="mt-2 text-sm text-slate-600">Security-first mindset across all service lines.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-900">Infrastructure</h3>
              <p className="mt-2 text-sm text-slate-600">Facility and technical excellence for modern workplaces.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand-900">Growth</h3>
              <p className="mt-2 text-sm text-slate-600">Partnerships built for long-term operational success.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              title="Workforce & reach"
              description={`${site.stats.workforce} professionals supporting operations across ${site.stats.locations.join(", ")} and beyond.`}
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="font-semibold text-brand-900">Compliance & registrations</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.compliance.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <Container>
          <SectionHeading title="Leadership" />
          <div className="mt-8 max-w-xl rounded-2xl border border-brand-100 bg-brand-50/50 p-8">
            <p className="text-2xl font-bold text-brand-900">{site.leadership.name}</p>
            <p className="mt-1 text-brand-700">{site.leadership.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Leading integrated operations with a commitment to compliance, service quality and
              customer trust.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
