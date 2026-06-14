import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  industries,
  processSteps,
  services,
  site,
  whyUs,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
              Pan India Operations
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-5 text-xl text-brand-100 sm:text-2xl">{site.tagline}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-200">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
              >
                Request a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why B-SSARC"
            title="One partner for security, facilities and beyond"
            description="Compliance-driven operations with a single-window approach across major Indian cities."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Integrated service lines"
            description="From security and facility management to technical, F&B and real estate support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="rounded-2xl border border-brand-100 bg-brand-50/40 p-6"
              >
                <h3 className="text-xl font-semibold text-brand-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
              View all services →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Serving diverse sectors across India"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A structured delivery model"
            description="Assessment through continuous improvement — built for reliability and scale."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-2xl border border-brand-800 bg-brand-900/60 p-5">
                <p className="text-sm font-bold text-brand-300">{step.step}</p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <SectionHeading
                eyebrow="Leadership"
                title={site.leadership.name}
                description={`${site.leadership.title} — leading ${site.name} with a focus on secure, compliant and customer-focused operations.`}
              />
              <p className="mt-6 text-sm text-slate-600">
                Workforce strength: <strong>{site.stats.workforce} professionals</strong>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Locations: {site.stats.locations.join(" • ")} • Pan India expansion
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-brand-700 p-6 text-white">
              <p className="text-sm uppercase tracking-wider text-brand-200">Ready to partner?</p>
              <p className="mt-3 text-2xl font-bold">{site.motto}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
